/** @format */

import { QueryResolvers } from 'src/generated/resolvers';
import { fetchUserByQuery } from './fetchUser.js';
import { fetchUsers } from './fetchUsers.js';
import { me } from './me.js';

export const UserQueries: QueryResolvers = {
  users: async (_, args, context) => {
    return await fetchUsers(context.models, args);
  },
  user: async (_, args, context) => {
    return await fetchUserByQuery(context.models, args.query);
  },
  me: async (_, __, context) => {
    return await me(context);
  },
};
