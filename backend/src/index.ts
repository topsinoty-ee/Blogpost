/** @format */

import { ApolloServer } from '@apollo/server';
import { User as UserModel } from './models/User.js'; // Changed variable name for clarity
import resolvers from './resolvers/index.js';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase, db } from './database.js';
import { BaseContext } from './utils/context.js';
import { authToken } from './utils/authToken.js';

// Load and parse the GraphQL schema
const typeDefs = readFileSync('./src/schema.graphql', 'utf-8');

// Ensure the database connection is established before starting the server
await connectToDatabase();

// Initialize Apollo Server
const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }): Promise<BaseContext> => {
    console.log('Request Headers:', req.headers.cookie);
    const context = { req, res, db, models: { User: UserModel } };
    const currentUser = authToken(context);

    return {
      ...context,
      currentUser,
    };
  },
});

console.log(`🚀 Server ready at ${url}`);
