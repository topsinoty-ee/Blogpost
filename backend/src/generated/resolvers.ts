/** @format */

import { GraphQLResolveInfo } from 'graphql';
import {
  Maybe,
  Blog,
  Scalars,
  LoginResponse,
  Post,
  Res,
  Series,
  SortInput,
  User,
  MutationAddAuthorToSeriesArgs,
  MutationAddAuthorsArgs,
  MutationAddToSeriesArgs,
  MutationChangePasswordArgs,
  MutationCreateBlogArgs,
  MutationCreateCommentArgs,
  MutationCreatePostArgs,
  MutationCreateSeriesArgs,
  MutationCreateUserArgs,
  MutationDeleteBlogArgs,
  MutationDeleteCommentArgs,
  MutationDeletePostArgs,
  MutationDeleteSeriesArgs,
  MutationDeleteUserArgs,
  MutationEditBlogArgs,
  MutationEditPostArgs,
  MutationEditSeriesArgs,
  MutationEditUserArgs,
  MutationFollowUserArgs,
  MutationLikeCommentArgs,
  MutationLoginUserArgs,
  MutationRemoveAuthorArgs,
  MutationRemoveAuthorFromSeriesArgs,
  MutationReplyToCommentArgs,
  MutationRequestPasswordResetArgs,
  MutationResetPasswordArgs,
  MutationUnFollowUserArgs,
  MutationUnlikeCommentArgs,
  MutationUpdateProfilePictureArgs,
  QueryBlogArgs,
  QueryPostArgs,
  QueryPostsArgs,
  QuerySeriesArgs,
  QueryUserArgs,
  QueryUsersArgs,
} from './types';
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Blog: ResolverTypeWrapper<Blog>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  Res: ResolverTypeWrapper<Res>;
  Series: ResolverTypeWrapper<Series>;
  SortInput: SortInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Blog: Blog;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LoginResponse: LoginResponse;
  Mutation: {};
  Post: Post;
  Query: {};
  Res: Res;
  Series: Series;
  SortInput: SortInput;
  String: Scalars['String']['output'];
  User: User;
};

export type BlogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authorIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  coverImage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  series?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Series']>>>,
    ParentType,
    ContextType
  >;
  subscribers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replies?: Resolver<
    Maybe<Array<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >;
  repliesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']
> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addAuthorToSeries?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAuthorToSeriesArgs, 'authorID' | 'seriesID'>
  >;
  addAuthors?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAuthorsArgs, 'authorIDs' | 'blogID'>
  >;
  addToSeries?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationAddToSeriesArgs, 'post' | 'seriesID'>
  >;
  changePassword?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, 'newPassword' | 'oldPassword'>
  >;
  createBlog?: Resolver<
    Maybe<ResolversTypes['Blog']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBlogArgs, 'name'>
  >;
  createComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentArgs, 'content' | 'postID'>
  >;
  createPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreatePostArgs,
      'authorID' | 'blogID' | 'content' | 'title'
    >
  >;
  createSeries?: Resolver<
    Maybe<ResolversTypes['Series']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSeriesArgs, 'blogID' | 'title'>
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>
  >;
  deleteBlog?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteBlogArgs, 'blogID'>
  >;
  deleteComment?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, 'commentID'>
  >;
  deletePost?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePostArgs, '_id'>
  >;
  deleteSeries?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSeriesArgs, 'seriesID'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'password' | 'userID'>
  >;
  editBlog?: Resolver<
    Maybe<ResolversTypes['Blog']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditBlogArgs, 'blogID'>
  >;
  editPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditPostArgs, 'post'>
  >;
  editSeries?: Resolver<
    Maybe<ResolversTypes['Series']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditSeriesArgs, 'seriesID'>
  >;
  editUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<MutationEditUserArgs>
  >;
  followUser?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationFollowUserArgs, 'userID'>
  >;
  likeComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationLikeCommentArgs, 'commentID'>
  >;
  loginUser?: Resolver<
    ResolversTypes['LoginResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, 'password' | 'username'>
  >;
  logout?: Resolver<ResolversTypes['Res'], ParentType, ContextType>;
  removeAuthor?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveAuthorArgs, 'authorID' | 'blogID'>
  >;
  removeAuthorFromSeries?: Resolver<
    Maybe<ResolversTypes['Res']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveAuthorFromSeriesArgs, 'authorID' | 'seriesID'>
  >;
  replyToComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationReplyToCommentArgs, 'commentID' | 'content'>
  >;
  requestPasswordReset?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationRequestPasswordResetArgs, 'email'>
  >;
  resetPassword?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationResetPasswordArgs, 'newPassword' | 'token'>
  >;
  unFollowUser?: Resolver<
    ResolversTypes['Res'],
    ParentType,
    ContextType,
    RequireFields<MutationUnFollowUserArgs, 'userID'>
  >;
  unlikeComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationUnlikeCommentArgs, 'commentID'>
  >;
  updateProfilePicture?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProfilePictureArgs, 'profilePicture' | 'userID'>
  >;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authorID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blogID?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  commentIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seriesID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tags?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  thumbnail?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  allSeries?: Resolver<
    Maybe<Array<ResolversTypes['Series']>>,
    ParentType,
    ContextType
  >;
  blog?: Resolver<
    Maybe<ResolversTypes['Blog']>,
    ParentType,
    ContextType,
    RequireFields<QueryBlogArgs, 'blogID'>
  >;
  blogs?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  post?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<QueryPostArgs, 'postID'>
  >;
  posts?: Resolver<
    Maybe<Array<ResolversTypes['Post']>>,
    ParentType,
    ContextType,
    RequireFields<QueryPostsArgs, 'seriesID'>
  >;
  series?: Resolver<
    Maybe<ResolversTypes['Series']>,
    ParentType,
    ContextType,
    RequireFields<QuerySeriesArgs, 'blogID'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'query'>
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'query'>
  >;
};

export type ResResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Res'] = ResolversParentTypes['Res']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Series'] = ResolversParentTypes['Series']
> = {
  BlogID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authorIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  postIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  thumbnail?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followedUsers?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  postIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  profilePicture?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  subscribedBlogIDs?: Resolver<
    Maybe<Array<ResolversTypes['ID']>>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Blog?: BlogResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Res?: ResResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
