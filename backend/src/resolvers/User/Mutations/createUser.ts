/** @format */

import { ObjectId } from 'mongodb';
import { UserInputError } from 'apollo-server';
import { MutationCreateUserArgs } from 'src/generated/types';
import { generateToken } from '../../../utils/generateToken.js';
import { BaseContext } from '../../../utils/context.js';
import { User } from 'src/generated/types.js';
import { IUser } from '@models/User.js';

const validateUserInput = (
  password: IUser['password'],
  username: IUser['username'],
  email: IUser['email']
) => {
  if (!password || !username || !email) {
    throw new UserInputError('All fields are required');
  }
};

const checkExistingUser = async (
  models: BaseContext['models'],
  username: IUser['username'],
  email: IUser['email']
): Promise<User | null> => {
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
): Promise<User> => {
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

    const token = generateToken(newUser);

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
