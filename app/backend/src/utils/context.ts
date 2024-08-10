/** @format */

import { User } from '@models/User';
import { db } from '../database';
import { IncomingMessage, ServerResponse } from 'http';
import { Blog } from '@models/Blog';
import { Post } from '@models/Post';

export interface BaseContext {
  req: IncomingMessage;
  res: ServerResponse;
  currentUser?: any | null;
  db: typeof db;
  models: {
    User: typeof User;
    Blog: typeof Blog;
    Post: typeof Post;
  };
}
