/** @format */

import { MutationResolvers } from '@blogpost/types';
import { createBlog } from './createBlog.js';

export const BlogMutation: MutationResolvers = {
  createBlog: async (_, args, context) => {
    return createBlog(args, context);
  },
};
