/** @format */

import { UserInputError, AuthenticationError } from 'apollo-server';
import { compare } from 'bcrypt';
import { MutationLoginUserArgs } from 'src/generated/resolvers';
import { generateToken } from '../../../utils/generateToken.js';
import { BaseContext } from '../../../utils/context.js';
import { LoginResponse } from 'src/generated/types.js';

const validateLoginInput = (username: string, password: string) => {
  if (!username || !password) {
    throw new UserInputError('Username and password are required');
  }
};

const findUserByUsername = async (models: any, username: string) => {
  return await models.User.findOne({ username });
};

export const loginUser = async (
  args: MutationLoginUserArgs,
  context: BaseContext
):Promise<LoginResponse> => {
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
        ...user._doc,
        id: user._id,
      },
      token,
    };
  } catch (error) {
    console.error('Error logging in user:', error);
    throw new Error(error as string);
  }
};
