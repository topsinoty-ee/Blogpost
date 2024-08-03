/** @format */

import { MutationResolvers } from '../../../generated/resolvers';
import { createBlog } from './createBlog.js';

export const BlogMutation: MutationResolvers = {
  createBlog: async (_, args, context) => {
    return createBlog(args, context);
  },
};
