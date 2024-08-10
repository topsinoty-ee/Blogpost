/** @format */

import { Schema, model, Document } from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

// Interface extending Document to include our methods
export interface IUser extends Document {
  userId?: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  bio?: string;
  blogs: Schema.Types.ObjectId[];
  posts: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  followedUsers: Schema.Types.ObjectId[];
  subscribedBlogs: Schema.Types.ObjectId[];
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

const UserSchema: Schema<IUser> = new Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      unique: true,
      minlength: [3, 'Username must be at least 3 characters long.'],
      maxlength: [30, 'Username must be at most 30 characters long.'],
      match: [
        usernameRegex,
        'Username must only contain alphanumeric characters and underscores, and must be between 3 and 16 characters long.',
      ],
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      match: [emailRegex, 'Please fill a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      match: [
        passwordRegex,
        'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one digit.',
      ],
    },
    profilePicture: { type: String },
    bio: { type: String },
    blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    followers: [{type: Schema.Types.ObjectId, ref:'User'}],
    followedUsers: [{type: Schema.Types.ObjectId, ref:'User'}],
    subscribedBlogs: [{type: Schema.Types.ObjectId, ref:'Blog'}],
  },
  {
    timestamps: true,
    methods: {
      comparePassword: async function (
        candidatePassword: string
      ): Promise<boolean> {
        const user = this as IUser;
        return bcrypt.compare(candidatePassword, user.password);
      },
    },
  }
);

// Pre-save hook to handle password hashing and custom ID generation
UserSchema.pre<IUser>('save', async function (next) {
  if (this.isNew && !this.userId) {
    const prefix = 'user_';
    const timestamp = Date.now().toString(36);
    const randomSuffix = crypto.randomBytes(3).toString('hex');
    const combined = (timestamp + randomSuffix).slice(-10);
    this.userId = `${prefix}${combined}`;
  }
  if (this.isNew || this.isModified('password')) {
    try {
      const saltRounds = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (error) {
      return next(error as Error);
    }
  }
  next();
});

// Export the model
export const User = model<IUser>('User', UserSchema);
