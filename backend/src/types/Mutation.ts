/** @format */

import { Blog } from './Blog';
import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface Mutation {
  createUser(username: string, email: string, password: string): User;
  createBlog(name: string, description: string, authorID: string): Blog;
  createPost(title: string, content: string, blogID: string): Post;
  createComment(content: string, postID: string, userID: string): Comment;
}
