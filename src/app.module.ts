import { join } from 'node:path'
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { useResponseCache } from '@graphql-yoga/plugin-response-cache'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { DateResolver, DateTimeISOResolver, JSONResolver, URLResolver } from 'graphql-scalars'
import { FilmsModule } from './films/films.module.js'
import { PeopleModule } from './people/people.module.js'
import { SpeciesModule } from './species/species.module.js'
import { StarshipsModule } from './starships/starships.module.js'
import { VehiclesModule } from './vehicles/vehicles.module.js'

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
        path: join(process.cwd(), 'src/generated/graphql.ts'),
        customScalarTypeMapping: {
          Date: 'Date | string',
          DateTimeISO: 'Date | string',
          URL: '_URL | string'
        },
        additionalHeader: 'import { URL as _URL } from \'url\''
      },
      resolvers: {
        Date: DateResolver,
        DateTimeISO: DateTimeISOResolver,
        URL: URLResolver,
        JSON: JSONResolver
      }
    }),
    ConfigModule.forRoot(),
    FilmsModule,
    PeopleModule,
    SpeciesModule,
    VehiclesModule,
    StarshipsModule
  ]
})
export class AppModule { }
