/** @format */

import { BaseContext } from './context.js';
import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';

export const authToken = async (context: BaseContext) => {
  const { TOKEN_SECRET } = process.env;
  if (!TOKEN_SECRET) {
    console.error('Token secret is not defined');
    throw new AuthenticationError('Token secret is not defined');
  }

  const authHeader = context.req.headers.authorization;
  if (!authHeader) {
    throw new AuthenticationError('Authorization header must be present.');
  }

  //   const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  //   if (!token) {
  //     throw new AuthenticationError('No token provided.');
  //   }
  const token = authHeader;

  try {
    const user = jwt.verify(token, TOKEN_SECRET) as any;
    if (!user) {
      throw new AuthenticationError('Invalid token.');
    }
    const currentUser = await context.models.User.findOne({ userId: user.id });
    console.log('Current User:', currentUser); // Log the current user to verify
    return currentUser;
  } catch (error) {
    console.error('Token verification error:', error); // Detailed error logging
    throw new AuthenticationError('Invalid or expired token.');
  }
};
