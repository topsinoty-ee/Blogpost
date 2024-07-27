/** @format */

import { Blog } from './Blog';
import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  _id: string;
  title: string;
  content?: string;
  blog: Blog;
  comments?: Comment[];
  author: User;
  likeCount: number;
  description?: string;
}
