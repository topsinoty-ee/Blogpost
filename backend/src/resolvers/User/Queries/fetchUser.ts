/** @format */

import { UserInputError } from 'apollo-server';
import { QueryUserArgs } from 'src/generated/types';
import { BaseContext } from 'src/utils/context';

export type UserQueryCondition = {
  username?: string;
  id?: string;
  email?: string;
};

// Function to fetch a single user based on different criteria
export const fetchUserByQuery = async (
  models: BaseContext['models'],
  query: QueryUserArgs['query']
) => {
  try {
    const conditions: UserQueryCondition[] = [];

    if (query.startsWith('@')) {
      conditions.push({ username: query.substring(1) });
    }
    if (query.startsWith('#')) {
      conditions.push({ id: query.substring(1) });
    }
    if (query.startsWith('user_')) {
      conditions.push({ id: query });
    }
    if (query.startsWith('/')) {
      conditions.push({ email: query.substring(1) });
    }
    if (
      !query.startsWith('@') &&
      !query.startsWith('user_') &&
      !query.startsWith('#') &&
      !query.startsWith('/')
    ) {
      conditions.push({ username: query });
    }

    const user:any = await models.User.findOne({ $or: conditions });

    if (!user) {
      throw new UserInputError('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Unable to fetch user. Error: ' + error);
  }
};
