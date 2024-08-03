/** @format */

import type { Resolvers } from 'src/generated/resolvers';
import dotenv from 'dotenv';
import { UserResolvers } from './User/index.js';
import { BlogResolvers } from './Blog/index.js';

dotenv.config();

const resolvers: Resolvers = {
  Query: {
    ...UserResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
    ...BlogResolvers.Mutation,
  },
};

export default resolvers;
