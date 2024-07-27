/** @format */

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { client } from './database.js';
import { User } from './types/User.js';
import { users, user } from './resolvers/query/User.js';
import { Db } from 'mongodb';

//import TypeDefs from schema
const typeDefs = readFileSync('src/schema.graphql', 'utf-8');


//make resolvers modular later
//add mutations to resolvers
const resolvers = {
  Query: {
    users: async (): Promise<User[] | null> => {
      try {
        return await users();
      } catch (error) {
        console.error('Error fetching users:', error);
        return null;
      }
    },
    user: async (
      _: any,
      { query }: { query: string }
    ): Promise<User | null> => {
      try {
        return await user(query);
      } catch (error) {
        console.error('Error fetching user:', error);
        return null;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  let dbClient: Db;

  try {
    dbClient = (await client.connect()).db();
    console.log('Successfully connected to MongoDB');

    try {
      await dbClient.command({ ping: 1 });
      console.log('Successfully pinged to MongoDB');
      await dbClient.collections();

      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async () => {
          return { db: dbClient };
        },
      });

      console.log(`Server ready at ${url}`);
    } catch (serverError) {
      console.error('Error starting Apollo Server:', serverError);
      process.exit(1);
    }
  } catch (dbError) {
    console.error('Error connecting to MongoDB:', dbError);
  }
}

startServer();
