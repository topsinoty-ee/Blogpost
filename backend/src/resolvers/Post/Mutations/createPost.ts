/** @format */

import { AuthenticationError } from 'apollo-server';
import { BaseContext } from '../../../utils/context';
import { MutationCreatePostArgs, Post } from 'src/generated/types';
import { ObjectId } from 'mongodb';

export const createPost = async (
  args: MutationCreatePostArgs,
  context: BaseContext
): Promise<Post> => {
  const currentUser = await context.currentUser;
  if (!currentUser) {
    console.error('AuthenticationError: Unauthorized - 403');
    throw new AuthenticationError('Unauthorized - 403');
  }

  const session = await context.models.Post.startSession();
  session.startTransaction();

  try {
    // Generate title if not provided
    let title =
      args.title ||
      `untitled post #${await context.models.Post.countDocuments({
        title: { $regex: /^untitled post #/ },
        author: currentUser._id,
      }).exec()}`;


    // Assume args.blogID is already an ObjectId
    const blogId = new ObjectId(args.blogID);

    const blog = await context.models.Blog.findById(blogId).session(session);
    if (!blog) {
      console.error('Error: Blog not found');
      throw new Error('Blog not found');
    }


    const newPost = new context.models.Post({
      _id: new ObjectId(),
      title,
      blog: blogId, // Use the existing blogId
      author: currentUser._id,
      content: args.content,
    });

    await newPost.save({ session });


    currentUser.posts.push(newPost._id);
    await currentUser.save({ session });


    blog.posts.push(newPost._id);
    await blog.save({ session });


    await session.commitTransaction();

    return {
      ...newPost.toObject(),
      _id: newPost._id.toString(),
    };
  } catch (err) {
    console.error('Error during post creation:', err);
    await session.abortTransaction();
    throw new Error(`Unable to create post. Error: ${err}`);
  } finally {
    session.endSession();
  }
};
