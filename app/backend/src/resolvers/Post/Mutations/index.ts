/** @format */

import { MutationResolvers } from '@blogpost/types';
import { createPost } from './createPost.js';

export const PostMutations: MutationResolvers = {
  createPost: async (_, args, context) => {
    return createPost(args, context);
  },
};
