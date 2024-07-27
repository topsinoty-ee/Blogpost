/** @format */

import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const { DB_USER, DB_USER_PASSWORD, CLUSTER } = process.env;

if (!DB_USER || !DB_USER_PASSWORD || !CLUSTER) {
  throw new Error('Missing required environment variables');
}

const uri = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=Blogpost`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
