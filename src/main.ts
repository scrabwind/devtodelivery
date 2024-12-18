import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
  const logger = new Logger()
  logger.log(`Application is running on: ${await app.getUrl()}`)
  if (process.env.NODE_ENV === 'development') {
    logger.log(`GraphQL Playground: ${await app.getUrl()}/graphql`)
  }
}

void bootstrap()
