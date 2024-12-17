import { Args, Query, Resolver } from '@nestjs/graphql'
import { SpeciesService } from './species.service.js'

@Resolver()
export class SpeciesResolver {
  constructor(private readonly speciesResolver: SpeciesService) { }
  @Query()
  async species(@Args('id') id?: string, @Args('page') page = 1) {
    if (id !== undefined) {
      return [await this.speciesResolver.findOne(id)]
    }
    return this.speciesResolver.findAll(page)
  }
}
