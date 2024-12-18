import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get(ConfigService)

  await app.listen(configService.get('PORT') ?? 3000)
  const logger = new Logger()
  logger.log(`Application is running on: ${await app.getUrl()}`)
  if (process.env.NODE_ENV === 'development') {
    logger.log(`GraphQL Playground: ${await app.getUrl()}/graphql`)
  }
}

void bootstrap()
