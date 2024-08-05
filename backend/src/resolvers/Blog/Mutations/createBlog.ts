/** @format */

import { Blog, MutationCreateBlogArgs } from 'src/generated/types';
import { BaseContext } from '../../../utils/context.js';
import { AuthenticationError } from 'apollo-server';
import { ObjectId } from 'mongodb';

export const createBlog = async (
  args: MutationCreateBlogArgs,
  context: BaseContext
): Promise<Blog> => {
  const currentUser = await context.currentUser;
  if (!currentUser) {
    throw new AuthenticationError('Unauthorized - 403');
  }

  const session = await context.models.Blog.startSession();
  session.startTransaction();

  try {
    const authorIDs = [currentUser._id];
    let name =
      args.name ||
      `unnamed #${await context.models.Blog.countDocuments({
        name: { $regex: /^unnamed #^/ },
        author: currentUser._id,
      }).exec()}`;

    const newBlog = new context.models.Blog({
      _id: new ObjectId(),
      name,
      description: args.description,
      authorIDs: authorIDs,
    });

    await newBlog.save({ session });

    // Update the current user's blogs array
    currentUser.blogs.push(newBlog._id);
    await currentUser.save({ session });

    // Commit the transaction
    await session.commitTransaction();

    // Convert the _id to string before returning
    const blogToReturn: Blog = {
      ...newBlog.toObject(),
      _id: newBlog._id.toString(),
    };

    return blogToReturn;
  } catch (err) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    throw new Error(`Unable to create blog. Error: ${err}`);
  } finally {
    session.endSession();
  }
};
