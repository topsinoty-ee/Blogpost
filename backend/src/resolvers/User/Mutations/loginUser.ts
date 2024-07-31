/** @format */

import { UserInputError, AuthenticationError } from 'apollo-server';
import { compare } from 'bcrypt';
import { MutationLoginUserArgs } from 'src/generated/types'; // Ensure this matches your codeGen output
import { generateToken } from '../../../utils/generateToken.js';
import { BaseContext } from '../../../utils/context.js';
import { LoginResponse } from 'src/generated/types.js';
import { IUser } from '@models/User.js';

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

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new AuthenticationError('Invalid password');
    }

    const { TOKEN_SECRET } = process.env;
    if (!TOKEN_SECRET) {
      console.error('Token secret is not defined');
      throw new AuthenticationError('Token secret is not defined');
    }

    const token = generateToken(user, TOKEN_SECRET);

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
