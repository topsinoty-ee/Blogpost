/** @format */

import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  repliesCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
});

export const Comment = model('Comment', CommentSchema)