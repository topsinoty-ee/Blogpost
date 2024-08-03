/** @format */

import { Resolvers } from 'src/generated/resolvers';
import { PostMutations } from './Mutations/index.js';

export const PostResolvers: Resolvers = {
  Mutation: {
    ...PostMutations,
  },
};
