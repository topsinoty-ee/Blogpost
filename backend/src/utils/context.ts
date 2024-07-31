/** @format */

import { User } from '../models/User';
import { db } from '../database';

export interface BaseContext {
  currentUser: any
  db: typeof db;
  models: {
    User: typeof User;
  };
}
