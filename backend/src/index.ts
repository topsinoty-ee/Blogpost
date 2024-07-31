/** @format */

import { ApolloServer } from '@apollo/server';
import { User as UserModel } from './models/User.js'; // Changed variable name for clarity
import resolvers from './resolvers/index.js';
import jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connectToDatabase, db } from './database.js';
import { AuthenticationError } from 'apollo-server-errors'; // Updated import
import { User as UserType } from './generated/types.js'; // Ensure this matches your actual types
import { BaseContext } from './utils/context.js';

// Load and parse the GraphQL schema
const typeDefs = readFileSync('./src/schema.graphql', 'utf-8');

// Ensure the database connection is established before starting the server
await connectToDatabase();

// Helper function to transform Mongoose document to GraphQL UserType
const transformUser = (userDoc: any): UserType => ({
  ...userDoc.toObject(),
  _id: userDoc._id.toString(), // Convert ObjectId to string if needed
});

// Initialize Apollo Server
const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }): Promise<BaseContext> => {
    const token = req.headers.authorization || '';
    let currentUser: UserType | null = null;

    if (token) {
      try {
        const { TOKEN_SECRET } = process.env;

        if (!TOKEN_SECRET) {
          throw new Error('Missing TOKEN_SECRET environment variable');
        }

        const decodedToken = jwt.verify(
          token.replace('Bearer ', ''),
          TOKEN_SECRET
        ) as { id: string };

        const userDoc = await UserModel.findById(decodedToken.id).exec();
        if (userDoc) {
          currentUser = transformUser(userDoc);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        throw new AuthenticationError('Invalid or expired token');
      }
    }

    return {
      currentUser,
      db,
      models: {
        User: UserModel, // Use UserModel instead of User
      },
    };
  },
});

console.log(`🚀 Server ready at ${url}`);
