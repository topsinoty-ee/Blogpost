/** @format */

import { Post } from './Post';
import { User } from './User';

export interface Comment {
  id: string;
  content: string;
  post: Post;
  user: User;
  replies?: Comment[];
  repliesCount: number;
  likeCount: number;
}
