/** @format */

import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String },
  description: { type: String },
  blog: { type: Schema.Types.ObjectId, ref: 'blog', required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likeCount: { type: Number, required: true, default: 0 },
});

export const Post = model('Post', PostSchema);