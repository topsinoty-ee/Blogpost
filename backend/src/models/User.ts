/** @format */

import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  bio: { type: String },
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export const User = model('User', UserSchema);