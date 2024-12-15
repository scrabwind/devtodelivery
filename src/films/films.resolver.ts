import { Args, Query, Resolver } from '@nestjs/graphql';
import { FilmsService } from "./films.service"
import { Film } from '../generated/graphql';

@Resolver('Films')
export class FilmsResolver {
  constructor(private readonly filmService: FilmsService) { }
  @Query()
  async films(@Args('episode_id') episode_id?: string): Promise<Film[] | null> {
    if (episode_id) {
      return [await this.filmService.findOne(episode_id)]
    }
    return this.filmService.findAll()
  }

}
