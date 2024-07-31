/** @format */

import { User } from '../models/User';
import { db } from '../database';
import { User as UserType } from 'src/generated/types';
import { IncomingMessage } from 'http';

export interface BaseContext {
  req: IncomingMessage;
  currentUser?: UserType | null;
  db: typeof db;
  models: {
    User: typeof User;
  };
}
