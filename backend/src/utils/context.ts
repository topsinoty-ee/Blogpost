/** @format */

import { User } from '../models/User';
import { db } from '../database';
import { User as UserType } from 'src/generated/types';

export interface BaseContext {
  currentUser?: UserType | null;
  db: typeof db;
  models: {
    User: typeof User;
  };
}
