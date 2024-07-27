/** @format */

import { Post } from './Post';
import { User } from './User';

export interface Blog {
  _id: string;
  name: string;
  description?: string;
  posts?: Post[];
  authors: User[];
  coverImage?: string;
  published?: boolean;
}
