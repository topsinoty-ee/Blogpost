/** @format */

import { UserInputError, AuthenticationError } from 'apollo-server';
import { MutationLoginUserArgs } from 'src/generated/types'; // Ensure this matches your codeGen output
import { generateToken } from '../../../utils/generateToken.js';
import { BaseContext } from '../../../utils/context.js';
import { LoginResponse } from 'src/generated/types.js';
import { IUser } from '@models/User.js';
import cookie from 'cookie';
import { authToken } from '../../../utils/authToken.js';

const validateLoginInput = (
  username: IUser['username'],
  password: IUser['password']
) => {
  if (!username || !password) {
    throw new UserInputError('Username and password are required');
  }
};

const findUserByUsername = async (
  models: BaseContext['models'],
  username: IUser['userId']
): Promise<any | null> => {
  return await models.User.findOne({ username });
};

export const loginUser = async (
  args: MutationLoginUserArgs,
  context: BaseContext
): Promise<LoginResponse> => {
  const { username, password } = args;

  try {
    validateLoginInput(username, password);

    const user = await findUserByUsername(context.models, username);
    if (!user) {
      throw new AuthenticationError('User not found');
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AuthenticationError('Invalid password');
    }

    const token = await generateToken(user);
    context.res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })
    );
    context.currentUser = authToken(context);
    // Ensure the return structure matches the GraphQL schema
    return {
      user: {
        ...user.toObject(),
        id: user._id.toString(),
      },
      token,
    };
  } catch (error) {
    console.error('Error logging in user:', error);
    throw new Error(error as string);
  }
};
