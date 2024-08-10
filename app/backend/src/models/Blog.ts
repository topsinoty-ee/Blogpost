/** @format */

import { Schema, model } from 'mongoose';

const BlogSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    authorID: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    coverImage: { type: String },
    published: { type: Boolean, default: false },
    subscribers: {type:Number, default: 0 },
  },
  { timestamps: true }
);

export const Blog = model('Blog', BlogSchema);
