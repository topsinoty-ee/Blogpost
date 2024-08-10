/** @format */
import { QuerySearchArgs, SearchResult } from '@blogpost/types';
import { BaseContext } from '../../../utils/context.js';

export const Search = async (
  args: QuerySearchArgs,
  context: BaseContext
): Promise<SearchResult | any> => {
  const { query } = args;

  const regex = new RegExp(query, 'i');
  // const users = await context.models.User.find({ username: regex });
  const users = await context.models.User.aggregate([
    { $match: { $or: [{ username: regex }, { userId: regex }] } },
    {
      $project: {
        username: 1,
        avatar: 1,
        followerCount: { $size: '$followers' },
        postCount: { $size: '$posts' },
      },
    },
  ]);

  const blogs = await context.models.Blog.aggregate([
    {
      $match: {
        $or: [{ name: regex }, { 'posts.title': regex }],
      },
    },
    {
      $project: {
        name: 1,
        postsCount: { $size: '$posts' },
        totalLikes: {
          $sum: '$posts.likes',
        },
        subscribers: 1,
      },
    },
  ]);

  const posts = await context.models.Post.aggregate([
    { $match: { $or: [{ title: regex }, { content: regex }] } },
    {
      $project: {
        title: 1,
        author: 1,
        commentCount: { $size: '$comments' },
        likeCount: 1,
      },
    },
  ]);

  return {
    users,
    blogs,
    posts,
  };
};
