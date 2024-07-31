/** @format */

import { Resolvers } from 'src/generated/resolvers';
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
