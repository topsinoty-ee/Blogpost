import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'BlogFuser, a blogging site',
    description: 'A blog using Gatsby and TypeScript',
    author: 'Promise Temitope',
    social: {
      instagram: 'topsinoty.promise',
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // plugins: [
  //   'gatsby-plugin-react-helmet',
  //   'gatsby-source-graphql',
  //   {
  //     resolve: 'gatsby-source-graphql',
  //     options: {
  //       typeName: 'GQL',
  //       fieldName: 'graphql',
  //       url: 'http://localhost:4000',
  //     },
  //   },
  //   'gatsby-plugin-typescript',
  //   'gatsby-plugin-tailwindcss',
  // ],
};

export default config
