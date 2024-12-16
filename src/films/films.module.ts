import { Module } from '@nestjs/common'
import { FilmsResolver } from './films.resolver.js'
import { FilmsService } from './films.service.js'

@Module({
  providers: [FilmsService, FilmsResolver]
})
export class FilmsModule { }
