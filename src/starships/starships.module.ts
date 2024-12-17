import { Module } from '@nestjs/common'
import { StarshipsResolver } from './starships.resolver.js'
import { StarshipsService } from './starships.service.js'

@Module({
  providers: [StarshipsResolver, StarshipsService]
})
export class StarshipsModule {}
