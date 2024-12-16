import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql'
import { FilmsModule } from './films/films.module';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';
import { join } from 'path';
import { DateTimeISOResolver, URLResolver, DateResolver } from 'graphql-scalars'

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      landingPage: true,
      plugins: [useResponseCache({
        session: () => null,
        ttl: 1000 * 60 * 60 * 24 // 24 Hours
      })],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/generated/graphql.ts')
      },
      resolvers: {
        Date: DateResolver,
        DateTimeISO: DateTimeISOResolver,
        URL: URLResolver
      }
    }),
    ConfigModule.forRoot(),
    FilmsModule
  ]
})
export class AppModule { }