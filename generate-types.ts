import { join } from 'node:path'
import { GraphQLDefinitionsFactory } from '@nestjs/graphql'

const definitionsFactory = new GraphQLDefinitionsFactory()
void definitionsFactory.generate({
  watch: true,
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/generated/graphql.ts'),
  customScalarTypeMapping: {
    Date: 'Date | string',
    DateTimeISO: 'Date | string',
    URL: '_URL | string'
  },
  additionalHeader: 'import { URL as _URL } from \'url\''
})
