/** @format */

import type { Resolvers } from '@blogpost/types';
import dotenv from 'dotenv';
import { UserResolvers } from './User/index.js';
import { BlogResolvers } from './Blog/index.js';
import { PostResolvers } from './Post/index.js';
import { UtilResolvers } from './utils/index.js';

dotenv.config();

const resolvers: Resolvers = {
  Query: {
    ...UserResolvers.Query,
    ...UtilResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
    ...BlogResolvers.Mutation,
    ...PostResolvers.Mutation,
  },
};

export default resolvers;
