/** @format */

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AuthenticationError } from 'apollo-server';
import type { User } from 'src/generated/types';

dotenv.config();


export const generateToken = (user: User): string => {
  const { TOKEN_SECRET } = process.env;
  if (!TOKEN_SECRET) {
    console.error('Token secret is not defined');
    throw new AuthenticationError('Token secret is not defined');
  }

  return jwt.sign(
    {
      id: user.userId,
      username: user.username,
      email: user.email,
    },
    TOKEN_SECRET,
    { expiresIn: '1h' } // Adjust expiry based on your needs
  );
};
