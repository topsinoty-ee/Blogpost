/** @format */

import { BaseContext } from './context.js';
import { AuthenticationError } from 'apollo-server';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export const authToken = async (context: BaseContext) => {
  const { TOKEN_SECRET } = process.env;
  if (!TOKEN_SECRET) {
    console.error('Token secret is not defined');
    throw new AuthenticationError('Token secret is not defined');
  }

  const cookies = context.req.headers.cookie;
  if (!cookies) {
    throw new AuthenticationError('Cookie header must be present.');
  }

  const parsedCookies = cookie.parse(cookies);
  const token = parsedCookies.token;

  if (!token) {
    throw new AuthenticationError('Token must be present in cookies.');
  }

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
