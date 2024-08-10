/** @format */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import retry from 'async-retry';

// Load environment variables
dotenv.config();

// Constants
const RETRY_OPTIONS = {
  retries: 5,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 10000,
};

// Function to validate required environment variables
const validateEnvVars = () => {
  const { DB_USER, DB_USER_PASSWORD, CLUSTER } = process.env;
  if (!DB_USER || !DB_USER_PASSWORD || !CLUSTER) {
    throw new Error('Missing required environment variables');
  }
  return { DB_USER, DB_USER_PASSWORD, CLUSTER };
};

// Function to construct the MongoDB URI
const constructUri = ({ DB_USER, DB_USER_PASSWORD, CLUSTER }) =>
  `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${CLUSTER}.mongodb.net/blog-post?retryWrites=true&w=majority&appName=Blogpost`;

// Function to connect to the database with retry logic
const connectWithRetry = async (uri: string) => {
  await retry(async () => {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // 5 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log('Connected to MongoDB');
  }, RETRY_OPTIONS);
};

export let db: mongoose.mongo.Db;

// Main function to initialize the database connection
export const connectToDatabase = async () => {
  try {
    const envVars = validateEnvVars();
    const uri = constructUri(envVars);
    await connectWithRetry(uri);
    db = mongoose.connection.db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
