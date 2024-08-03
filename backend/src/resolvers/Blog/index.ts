/** @format */

import { Resolvers } from '../../generated/resolvers';
import { BlogMutation } from './Mutations/index.js';

export const BlogResolvers: Resolvers = {
    Mutation:{
        ...BlogMutation
    }
};
