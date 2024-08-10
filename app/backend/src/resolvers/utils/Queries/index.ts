/** @format */

import { QueryResolvers } from '@blogpost/types';
import { Search } from './search.js';

export const UtilQueries: QueryResolvers = {
  search: async (_, args, context) => {
    const results = await Search(args, context);
    return [
      ...results.users.map((userSum) => ({
        __typename: 'UserSummary',
        ...userSum,
      })),
      ...results.posts.map((post) => ({
        __typename: 'PostSummary',
        ...post,
      })),
      ...results.blogs.map((blog) => ({
        __typename: 'BlogSummary',
        ...blog,
      })),
    ];
  },
};
