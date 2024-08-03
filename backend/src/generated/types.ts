export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  LimitInput: { input: any; output: any; }
  SkipInput: { input: any; output: any; }
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  authors: Array<Scalars['ID']['output']>;
  coverImage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  published: Scalars['Boolean']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  likeCount: Scalars['Int']['output'];
  post: Post;
  replies?: Maybe<Array<Comment>>;
  repliesCount: Scalars['Int']['output'];
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createComment: Comment;
  createPost: Post;
  createUser: User;
  loginUser: LoginResponse;
  logout: LogoutResponse;
};


export type MutationCreateBlogArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  postID: Scalars['ID']['input'];
  userID: Scalars['ID']['input'];
};


export type MutationCreatePostArgs = {
  blogID: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID']['output'];
  author: User;
  blog: Blog;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  likeCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs: Array<Blog>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryBlogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  query: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['LimitInput']['input']>;
  query: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['SkipInput']['input']>;
  sort?: InputMaybe<Array<SortInput>>;
};

export type SortInput = {
  field: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  blogs?: Maybe<Array<Blog>>;
  email: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
