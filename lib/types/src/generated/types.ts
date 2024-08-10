import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owners: Array<Scalars['ID']['output']>;
  posts?: Maybe<Array<Scalars['ID']['output']>>;
  published: Scalars['Boolean']['output'];
  series?: Maybe<Array<Scalars['ID']['output']>>;
  subscribers: Scalars['Int']['output'];
};

export type BlogSummary = {
  __typename?: 'BlogSummary';
  name: Scalars['String']['output'];
  postCount: Scalars['Int']['output'];
  subscribers: Scalars['Int']['output'];
  totalLikes: Scalars['Int']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  likeCount: Scalars['Int']['output'];
  post: Scalars['ID']['output'];
  replies?: Maybe<Array<Scalars['ID']['output']>>;
  repliesCount: Scalars['Int']['output'];
  user: Scalars['ID']['output'];
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
  id: Scalars['ID']['input'];
  ownerIDs: Array<Scalars['ID']['input']>;
};


export type MutationAddToSeriesArgs = {
  id: Scalars['ID']['input'];
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
  id: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCommentArgs = {
  commentID: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSeriesArgs = {
  seriesID: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  password: Scalars['String']['input'];
  userID: Scalars['ID']['input'];
};


export type MutationEditBlogArgs = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPostArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
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
  id: Scalars['ID']['input'];
  ownerID: Scalars['ID']['input'];
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
  author: Scalars['ID']['output'];
  blog: Scalars['ID']['output'];
  comments?: Maybe<Array<Scalars['ID']['output']>>;
  content?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  likes: Scalars['Int']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  postSeries?: Maybe<Scalars['ID']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PostSummary = {
  __typename?: 'PostSummary';
  author: Scalars['String']['output'];
  commentCount: Scalars['Int']['output'];
  likeCount: Scalars['Int']['output'];
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
  search?: Maybe<Array<SearchResult>>;
  series?: Maybe<Series>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryBlogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  seriesID: Scalars['ID']['input'];
};


export type QuerySearchArgs = {
  query: Scalars['String']['input'];
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

export type SearchResult = BlogSummary | PostSummary | UserSummary;

export type Series = {
  __typename?: 'Series';
  blog: Scalars['ID']['output'];
  owners: Array<Scalars['ID']['output']>;
  posts?: Maybe<Array<Scalars['ID']['output']>>;
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
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  blogs?: Maybe<Array<Scalars['ID']['output']>>;
  comments?: Maybe<Array<Scalars['ID']['output']>>;
  email: Scalars['String']['output'];
  followedUsers?: Maybe<Array<Scalars['ID']['output']>>;
  followers?: Maybe<Array<Scalars['ID']['output']>>;
  posts?: Maybe<Array<Scalars['ID']['output']>>;
  subscribedBlogs?: Maybe<Array<Scalars['ID']['output']>>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserSummary = {
  __typename?: 'UserSummary';
  avatar?: Maybe<Scalars['String']['output']>;
  followerCount: Scalars['Int']['output'];
  postCount: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  SearchResult: ( BlogSummary ) | ( PostSummary ) | ( UserSummary );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Blog: ResolverTypeWrapper<Blog>;
  BlogSummary: ResolverTypeWrapper<BlogSummary>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostSummary: ResolverTypeWrapper<PostSummary>;
  Query: ResolverTypeWrapper<{}>;
  Res: ResolverTypeWrapper<Res>;
  SearchResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResult']>;
  Series: ResolverTypeWrapper<Series>;
  SortInput: SortInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserSummary: ResolverTypeWrapper<UserSummary>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Blog: Blog;
  BlogSummary: BlogSummary;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LoginResponse: LoginResponse;
  Mutation: {};
  Post: Post;
  PostSummary: PostSummary;
  Query: {};
  Res: Res;
  SearchResult: ResolversUnionTypes<ResolversParentTypes>['SearchResult'];
  Series: Series;
  SortInput: SortInput;
  String: Scalars['String']['output'];
  User: User;
  UserSummary: UserSummary;
};

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  series?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  subscribers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogSummary'] = ResolversParentTypes['BlogSummary']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subscribers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  repliesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAuthorToSeries?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationAddAuthorToSeriesArgs, 'authorID' | 'seriesID'>>;
  addAuthors?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationAddAuthorsArgs, 'id' | 'ownerIDs'>>;
  addToSeries?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationAddToSeriesArgs, 'id' | 'seriesID'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'newPassword' | 'oldPassword'>>;
  createBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationCreateBlogArgs, 'name'>>;
  createComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'content' | 'postID'>>;
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'authorID' | 'blogID' | 'content' | 'title'>>;
  createSeries?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<MutationCreateSeriesArgs, 'blogID' | 'title'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>>;
  deleteBlog?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationDeleteBlogArgs, 'id'>>;
  deleteComment?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'commentID'>>;
  deletePost?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteSeries?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationDeleteSeriesArgs, 'seriesID'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'password' | 'userID'>>;
  editBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<MutationEditBlogArgs, 'id'>>;
  editPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationEditPostArgs, 'id'>>;
  editSeries?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<MutationEditSeriesArgs, 'seriesID'>>;
  editUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationEditUserArgs>>;
  followUser?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'userID'>>;
  likeComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationLikeCommentArgs, 'commentID'>>;
  loginUser?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'password' | 'username'>>;
  logout?: Resolver<ResolversTypes['Res'], ParentType, ContextType>;
  removeAuthor?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationRemoveAuthorArgs, 'id' | 'ownerID'>>;
  removeAuthorFromSeries?: Resolver<Maybe<ResolversTypes['Res']>, ParentType, ContextType, RequireFields<MutationRemoveAuthorFromSeriesArgs, 'authorID' | 'seriesID'>>;
  replyToComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationReplyToCommentArgs, 'commentID' | 'content'>>;
  requestPasswordReset?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'email'>>;
  resetPassword?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'newPassword' | 'token'>>;
  unFollowUser?: Resolver<ResolversTypes['Res'], ParentType, ContextType, RequireFields<MutationUnFollowUserArgs, 'userID'>>;
  unlikeComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationUnlikeCommentArgs, 'commentID'>>;
  updateProfilePicture?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateProfilePictureArgs, 'profilePicture' | 'userID'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blog?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  postSeries?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSummary'] = ResolversParentTypes['PostSummary']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allSeries?: Resolver<Maybe<Array<ResolversTypes['Series']>>, ParentType, ContextType>;
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryBlogArgs, 'id'>>;
  blogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryPostsArgs, 'seriesID'>>;
  search?: Resolver<Maybe<Array<ResolversTypes['SearchResult']>>, ParentType, ContextType, RequireFields<QuerySearchArgs, 'query'>>;
  series?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<QuerySeriesArgs, 'blogID'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'query'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'query'>>;
};

export type ResResolvers<ContextType = any, ParentType extends ResolversParentTypes['Res'] = ResolversParentTypes['Res']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'BlogSummary' | 'PostSummary' | 'UserSummary', ParentType, ContextType>;
};

export type SeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Series'] = ResolversParentTypes['Series']> = {
  blog?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owners?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogs?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followedUsers?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  subscribedBlogs?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSummary'] = ResolversParentTypes['UserSummary']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Blog?: BlogResolvers<ContextType>;
  BlogSummary?: BlogSummaryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostSummary?: PostSummaryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Res?: ResResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserSummary?: UserSummaryResolvers<ContextType>;
};

