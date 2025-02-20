/** @format */

import { ApolloServer } from '@apollo/server';
import { User as UserModel } from './models/User.js'; // Changed variable name for clarity
import resolvers from './resolvers/index.js';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase, db } from './database.js';
import { BaseContext } from './utils/context.js';
import TokenManager from './utils/TokenManager.js';
import { Blog } from './models/Blog.js';
import { Post } from './models/Post.js';
import { typeDefs } from '@blogpost/types';

// Ensure the database connection is established before starting the server
await connectToDatabase();

// Initialize Apollo Server
const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

const getUserFromToken = async (context: BaseContext) => {
  if (!context) return null;
  try {
    const decoded = await TokenManager.authToken(context);
    const user = await UserModel.findOne({ userId: decoded.id });
    return user;
  } catch (error) {
    console.error('Failed to authenticate user:', error);
    return null;
  }
};

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }): Promise<BaseContext> => {
    const context = {
      req,
      res,
      db,
      models: {
        User: UserModel,
        Blog: Blog,
        Post: Post,
      },
    };
    let currentUser = getUserFromToken(context);
    return { ...context, currentUser };
  },
});

console.log(`🚀 Server ready at ${url}`);
