/** @format */

import { Blog } from './Blog';
import { Post } from './Post';

export interface User {
  _id: string;
  username: string;
  email: string;
  blogs?: Blog[];
  posts?: Post[];
  profilePicture?: string;
  bio?: string;
}
