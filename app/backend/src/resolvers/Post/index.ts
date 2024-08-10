/** @format */

import { Resolvers } from '@blogpost/types';
import { PostMutations } from './Mutations/index.js';

export const PostResolvers: Resolvers = {
  Mutation: {
    ...PostMutations,
  },
};
