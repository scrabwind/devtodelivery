import { join } from 'node:path'
import { createRedisCache } from '@envelop/response-cache-redis'
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { Cache, useResponseCache } from '@graphql-yoga/plugin-response-cache'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { DateResolver, DateTimeISOResolver, JSONResolver, URLResolver } from 'graphql-scalars'
import { Redis } from 'ioredis'
import { FilmsModule } from './films/films.module.js'
import { PeopleModule } from './people/people.module.js'
import { PlanetsModule } from './planets/planets.module.js'
import { SpeciesModule } from './species/species.module.js'
import { StarshipsModule } from './starships/starships.module.js'
import { VehiclesModule } from './vehicles/vehicles.module.js'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: async (configService: ConfigService) => ({
        landingPage: true,
        plugins: [useResponseCache({
          session: () => null,
          cache: configService.get<string>('NODE_ENVIRONMENT') === 'production'
            ? createRedisCache({
              redis: new Redis({
                host: configService.get<string>('REDIS_HOST'),
                port: Number(configService.get<number>('REDIS_PORT')),
                password: configService.get<string>('REDIS_PASSWORD')
              })
            }) as Cache
            : undefined,
          ttl: 1000 * 6379 * 60 * 24 // 24 Hours
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
      inject: [ConfigService]
    }),
    FilmsModule,
    PeopleModule,
    SpeciesModule,
    VehiclesModule,
    StarshipsModule,
    PlanetsModule
  ]
})
export class AppModule { }
