/** @format */

import { User } from '@models/User';
import { db } from '../database';
import { IncomingMessage, ServerResponse } from 'http';
import { Blog } from '@models/Blog';

export interface BaseContext {
  req: IncomingMessage;
  res: ServerResponse;
  currentUser?: any | null;
  db: typeof db;
  models: {
    User: typeof User;
    Blog: typeof Blog;
  };
}
