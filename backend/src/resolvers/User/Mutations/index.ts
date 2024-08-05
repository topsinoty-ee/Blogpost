/** @format */

import { MutationResolvers } from 'src/generated/resolvers';
import { createUser } from './createUser.js';
import { loginUser } from './loginUser.js';
import { LogoutUser } from './logoutUser.js';

export const UserMutations: MutationResolvers = {
  createUser: async (_, args, context) => {
    return createUser(args, context);
  },
  loginUser: async (_, args, context) => {
    return loginUser(args, context);
  },
  logout: async (_, __, context) => {
    return LogoutUser(context);
  },
};
