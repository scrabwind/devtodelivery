import { Module } from '@nestjs/common'
import { PeopleService } from '../people/people.service.js'
import { FilmsResolver } from './films.resolver.js'
import { FilmsService } from './films.service.js'

@Module({
  providers: [FilmsService, FilmsResolver, PeopleService]
})
export class FilmsModule { }
