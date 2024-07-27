/** @format */

import { Blog } from './Blog';
import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface Query {
  users?: User[];
  user?: User;
  blogs?: Blog[];
  blog?: Blog;
  posts?: Post[];
  post?: Post;
  comments?: Comment[];
  comment?: Comment;
}
