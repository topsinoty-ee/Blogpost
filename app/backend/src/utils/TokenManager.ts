/** @format */

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { AuthenticationError } from 'apollo-server';
import cookie from 'cookie';
import { BaseContext } from '../utils/context.js';
import { User } from '@blogpost/types';

dotenv.config();

interface BlacklistEntry {
  token: string;
  expiresAt: Date;
}

class TokenManager {
  private static blacklistedTokens: BlacklistEntry[] = [];

  private static getTokenSecret(): string {
    const { TOKEN_SECRET } = process.env;
    if (!TOKEN_SECRET) {
      throw new AuthenticationError('Token secret is not defined');
    }
    return TOKEN_SECRET;
  }

  private static isTokenBlacklisted(token: string): boolean {
    const now = new Date();
    TokenManager.blacklistedTokens = TokenManager.blacklistedTokens.filter(
      (entry) => entry.expiresAt > now
    );
    return TokenManager.blacklistedTokens.some(
      (entry) => entry.token === token
    );
  }

  public static async generateToken(user: User): Promise<string> {
    try {
      return jwt.sign(
        {
          id: user.userId,
          username: user.username,
          email: user.email,
        },
        TokenManager.getTokenSecret(),
        { expiresIn: '1h' }
      );
    } catch (error) {
      console.error('Error generating token:', error);
      throw new AuthenticationError('Error generating token');
    }
  }

  public static async verifyToken(token: string): Promise<any | null> {
    if (TokenManager.isTokenBlacklisted(token)) {
      throw new AuthenticationError('Token has been blacklisted');
    }

    try {
      const decoded = jwt.verify(token, TokenManager.getTokenSecret()) as any;
      return decoded;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        console.error('Token expired:', error);
        throw new AuthenticationError('Token has expired.');
      } else if (error instanceof jwt.JsonWebTokenError) {
        console.error('Token invalid:', error);
        throw new AuthenticationError('Invalid token.');
      } else {
        console.error('Token verification error:', error);
        throw new AuthenticationError('Token verification failed.');
      }
    }
  }

  public static setTokenCookie(res: any, token: string): void {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })
    );
  }

  public static clearTokenCookie(res: any): void {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: -1, // Expire the cookie immediately
        path: '/',
      })
    );
  }

  public static blacklistToken(token: string, expiresIn: number): void {
    const expiresAt = new Date(Date.now() + expiresIn * 1000);
    TokenManager.blacklistedTokens.push({ token, expiresAt });
  }

  public static async authToken(context: BaseContext): Promise<any | null> {
    const cookies = context.req.headers.cookie;
    if (!cookies) {
      throw new AuthenticationError('Cookie header must be present.');
    }

    const parsedCookies = cookie.parse(cookies);
    const token = parsedCookies.token;

    if (!token) {
      throw new AuthenticationError('Token must be present in cookies.');
    }

    return TokenManager.verifyToken(token);
  }

  public static async logout(context: BaseContext): Promise<void> {
    const cookies = context.req.headers.cookie;
    if (!cookies) {
      throw new AuthenticationError('Cookie header must be present.');
    }

    const parsedCookies = cookie.parse(cookies);
    const token = parsedCookies.token;

    if (token) {
      TokenManager.blacklistToken(token, 60 * 60 * 24 * 7); // Blacklist for 1 week
      TokenManager.clearTokenCookie(context.res);
    }
  }
}

export default TokenManager;
