import { Args, Query, Resolver } from '@nestjs/graphql'
import { Film } from '../generated/graphql.js'
import { FilmsService } from './films.service.js'

@Resolver('Films')
export class FilmsResolver {
  constructor(private readonly filmService: FilmsService) { }
  @Query()
  async films(@Args('episode_id') episode_id?: string): Promise<Film[] | null> {
    if (episode_id !== undefined) {
      return [await this.filmService.findOne(episode_id)]
    }
    return this.filmService.findAll()
  }
}
