/** @format */

import { client } from '../../database.js';
import { ObjectId } from 'mongodb';
import type { User } from '../../types/User.js';

export const users = async (): Promise<User[]> => {
  try {
    const userList = await (await client.connect())
      .db()
      .collection('users')
      .find()
      .sort({ values: 1 })
      .toArray();

    return userList.map((userDoc) => ({
      _id: userDoc._id.toString(),
      username: userDoc.username,
      email: userDoc.email,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Could not fetch users');
  }
};

export const user = async (query: string): Promise<User | null> => {
  let queryObject: Record<string, unknown>;

  if (query.startsWith('@')) {
    const username = query.substring(1);
    queryObject = { username: username };
  } else if (query.startsWith('#')) {
    const idString = query.substring(1);

    try {
      const id = new ObjectId(idString);
      queryObject = { _id: id };
    } catch (error) {
      console.error('Invalid ObjectId format:', idString);
      throw new Error('Invalid ID format');
    }
  } else {
    queryObject = { email: query };
  }

  const user = await (await client.connect())
    .db()
    .collection('users')
    .findOne(queryObject);

  if (!user) {
    return null;
  }

  return {
    _id: user._id.toString(),
    username: user.username,
    email: user.email,
    profilePicture: user.profilePicture,
    bio: user.bio,
  };
};
