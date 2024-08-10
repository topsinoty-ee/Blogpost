/** @format */

import { Resolvers } from '@blogpost/types';
import { UserQueries } from './Queries/index.js';
import { UserMutations } from './Mutations/index.js';

export const UserResolvers: Resolvers = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
};
