/** @format */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  authorIDs: Array<Scalars['ID']['output']>;
  coverImage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postIDs?: Maybe<Array<Scalars['ID']['output']>>;
  published: Scalars['Boolean']['output'];
  series?: Maybe<Array<Maybe<Series>>>;
  subscribers: Scalars['Int']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  likeCount: Scalars['Int']['output'];
  postID: Scalars['ID']['output'];
  replies?: Maybe<Array<Comment>>;
  repliesCount: Scalars['Int']['output'];
  userID: Scalars['ID']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthorToSeries?: Maybe<Res>;
  addAuthors?: Maybe<Res>;
  addToSeries: Res;
  changePassword?: Maybe<User>;
  createBlog?: Maybe<Blog>;
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  createSeries?: Maybe<Series>;
  createUser?: Maybe<User>;
  deleteBlog?: Maybe<Res>;
  deleteComment: Res;
  deletePost: Res;
  deleteSeries: Res;
  deleteUser?: Maybe<Res>;
  editBlog?: Maybe<Blog>;
  editPost?: Maybe<Post>;
  editSeries?: Maybe<Series>;
  editUser?: Maybe<User>;
  followUser: Res;
  likeComment: Comment;
  loginUser: LoginResponse;
  logout: Res;
  removeAuthor?: Maybe<Res>;
  removeAuthorFromSeries?: Maybe<Res>;
  replyToComment: Comment;
  requestPasswordReset: Res;
  resetPassword: User;
  unFollowUser: Res;
  unlikeComment: Comment;
  updateProfilePicture?: Maybe<User>;
};

export type MutationAddAuthorToSeriesArgs = {
  authorID: Scalars['ID']['input'];
  seriesID: Scalars['ID']['input'];
};

export type MutationAddAuthorsArgs = {
  authorIDs: Array<Scalars['ID']['input']>;
  blogID: Scalars['ID']['input'];
};

export type MutationAddToSeriesArgs = {
  post: Scalars['ID']['input'];
  seriesID: Scalars['ID']['input'];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type MutationCreateBlogArgs = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  postID: Scalars['ID']['input'];
};

export type MutationCreatePostArgs = {
  authorID: Scalars['ID']['input'];
  blogID: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MutationCreateSeriesArgs = {
  blogID: Scalars['ID']['input'];
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationDeleteBlogArgs = {
  blogID: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteCommentArgs = {
  commentID: Scalars['ID']['input'];
};

export type MutationDeletePostArgs = {
  _id: Scalars['ID']['input'];
};

export type MutationDeleteSeriesArgs = {
  seriesID: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  password: Scalars['String']['input'];
  userID: Scalars['ID']['input'];
};

export type MutationEditBlogArgs = {
  blogID: Scalars['ID']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditPostArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  post: Scalars['ID']['input'];
  seriesID?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditSeriesArgs = {
  seriesID: Scalars['ID']['input'];
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditUserArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFollowUserArgs = {
  userID: Scalars['ID']['input'];
};

export type MutationLikeCommentArgs = {
  commentID: Scalars['ID']['input'];
};

export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationRemoveAuthorArgs = {
  authorID: Scalars['ID']['input'];
  blogID: Scalars['ID']['input'];
};

export type MutationRemoveAuthorFromSeriesArgs = {
  authorID: Scalars['ID']['input'];
  seriesID: Scalars['ID']['input'];
};

export type MutationReplyToCommentArgs = {
  commentID: Scalars['ID']['input'];
  content: Scalars['String']['input'];
};

export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MutationUnFollowUserArgs = {
  userID: Scalars['ID']['input'];
};

export type MutationUnlikeCommentArgs = {
  commentID: Scalars['ID']['input'];
};

export type MutationUpdateProfilePictureArgs = {
  profilePicture: Scalars['String']['input'];
  userID: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  authorID: Scalars['ID']['output'];
  blogID: Blog;
  commentIDs?: Maybe<Array<Scalars['ID']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  likeCount: Scalars['Int']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  seriesID?: Maybe<Scalars['ID']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allSeries?: Maybe<Array<Series>>;
  blog?: Maybe<Blog>;
  blogs: Array<Blog>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  series?: Maybe<Series>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};

export type QueryBlogArgs = {
  blogID: Scalars['ID']['input'];
};

export type QueryPostArgs = {
  postID: Scalars['ID']['input'];
};

export type QueryPostsArgs = {
  seriesID: Scalars['ID']['input'];
};

export type QuerySeriesArgs = {
  blogID: Scalars['ID']['input'];
};

export type QueryUserArgs = {
  query: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type Res = {
  __typename?: 'Res';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Series = {
  __typename?: 'Series';
  BlogID: Scalars['ID']['output'];
  authorIDs: Array<Scalars['ID']['output']>;
  postIDs?: Maybe<Array<Scalars['ID']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type SortInput = {
  field: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  blogIDs?: Maybe<Array<Scalars['ID']['output']>>;
  email: Scalars['String']['output'];
  followedUsers?: Maybe<Array<Scalars['ID']['output']>>;
  followers?: Maybe<Array<Scalars['ID']['output']>>;
  postIDs?: Maybe<Array<Scalars['ID']['output']>>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  subscribedBlogIDs?: Maybe<Array<Scalars['ID']['output']>>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
