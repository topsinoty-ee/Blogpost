/** @format */

import { Resolvers } from '@blogpost/types';
import { BlogMutation } from './Mutations/index.js';

export const BlogResolvers: Resolvers = {
    Mutation:{
        ...BlogMutation
    }
};
