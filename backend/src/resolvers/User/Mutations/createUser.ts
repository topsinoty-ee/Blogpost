/** @format */

import { ObjectId } from 'mongodb';
import { UserInputError, AuthenticationError } from 'apollo-server';
import { MutationCreateUserArgs } from 'src/generated/resolvers';
import { generateToken } from '../../../utils/generateToken.js';
import { BaseContext } from '../../../utils/context.js';

const validateUserInput = (
  password: string,
  username: string,
  email: string
) => {
  if (!password || !username || !email) {
    throw new UserInputError('All fields are required');
  }
};

const checkExistingUser = async (
  models: any,
  username: string,
  email: string
) => {
  return await models.User.findOne({ $or: [{ username }, { email }] });
};

const createNewUser = async (models: any, args: MutationCreateUserArgs) => {
  const { password, username, email } = args;
  const newUser = new models.User({
    _id: new ObjectId(),
    username,
    email,
    password,
  });
  return await newUser.save();
};

export const createUser = async (
  args: MutationCreateUserArgs,
  context: BaseContext
) => {
  const { password, username, email } = args;

  try {
    validateUserInput(password, username, email);

    const existingUser = await checkExistingUser(
      context.models,
      username,
      email
    );
    if (existingUser) {
      throw new UserInputError('Username or email already exists');
    }

    const newUser = await createNewUser(context.models, {
      username,
      email,
      password,
    });

    const { TOKEN_SECRET } = process.env;
    if (!TOKEN_SECRET) {
      console.error('Token secret is not defined');
      throw new AuthenticationError('Token secret is not defined');
    }

    const token = generateToken(newUser, TOKEN_SECRET);

    return {
      ...newUser._doc,
      id: newUser._id,
      token,
    };
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error(error as string);
  }
};
