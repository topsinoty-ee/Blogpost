/** @format */

import { UserInputError, AuthenticationError } from 'apollo-server';
import { MutationLoginUserArgs, LoginResponse } from '@blogpost/types'; // Ensure this matches your codeGen output
import { BaseContext } from '../../../utils/context.js';
import { IUser } from '@models/User.js';
import TokenManager from '../../../utils/TokenManager.js';

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

    const token = await TokenManager.generateToken(user);
    TokenManager.setTokenCookie(context.res, token);

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
