import { Args, Query, Resolver } from '@nestjs/graphql'
import { StarshipsService } from './starships.service.js'

@Resolver()
export class StarshipsResolver {
  constructor(private readonly starshipsResolver: StarshipsService) { }
  @Query()
  async starships(@Args('id') id?: string, @Args('page') page = 1) {
    if (id !== undefined) {
      return [await this.starshipsResolver.findOne(id)]
    }
    return this.starshipsResolver.findAll(page)
  }
}
