/** @format */

import { Resolvers } from '@blogpost/types';
import { UtilQueries } from './Queries/index.js';

export const UtilResolvers: Resolvers = {
  Query: {
    ...UtilQueries,
  },
};
