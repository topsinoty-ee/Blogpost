/** @format */

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/schema.graphql',
  generates: {
    'src/generated/types.ts': {
      plugins: [
        'typescript',
        'typescript-mongodb',
      ],
    },
    'src/generated/resolvers.ts':{
      plugins: [
        'typescript',
        'typescript-resolvers',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
