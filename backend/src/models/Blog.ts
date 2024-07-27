/** @format */

import { Schema, model } from 'mongoose';

const BlogSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  authors: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  coverImage: { type: String },
  published: { type: Boolean, default: false },
});

export const Blog = model('Blog', BlogSchema);