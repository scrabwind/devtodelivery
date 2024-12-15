import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      landingPage: true
    }),
    PrismaModule
  ]
})
export class AppModule { }