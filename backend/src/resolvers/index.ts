// import type { Resolver } from "src/generated/graphql";

// export const resolvers: Resolver = {
//   Query: {
//     users: async (parent, args, context) => {
//       try {
//         return await context.prisma.users.findMany();
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         throw new Error('Unable to fetch users at this time.');
//       }
//     },

//     user: async (parent, args, context) => {
//       return context.prisma.user.findUnique({ where: { id: args.id } });
//     },
//     blogs: async (parent, args, context) => {
//       return context.prisma.blogs.findMany();
//     },
//     blog: async (parent, args, context) => {
//       return context.prisma.blog.findUnique({ where: { id: args.id } });
//     },
//     posts: async (parent, args, context) => {
//       return context.prisma.posts.findMany();
//     },
//     post: async (parent, args, context) => {
//       return context.prisma.post.findUnique({ where: { id: args.id } });
//     },
//     comments: async(parent, args, context),
//   },
// };