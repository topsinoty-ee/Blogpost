/** @format */

import { ApolloServer } from '@apollo/server';
import { User as UserModel } from './models/User.js'; // Changed variable name for clarity
import resolvers from './resolvers/index.js';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase, db } from './database.js';
import { BaseContext } from './utils/context.js';

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
  context: async ({ req }): Promise<BaseContext> => {
    console.log('Request Headers:', req.headers.authorization);
    return {
      req,
      db,
      models: {
        User: UserModel, // Use UserModel instead of User
      },
    };
  },
});

console.log(`🚀 Server ready at ${url}`);
