import { Args, Query, Resolver } from '@nestjs/graphql'
import { PlanetsService } from './planets.service.js'

@Resolver()
export class PlanetsResolver {
  constructor(private readonly planetsResolver: PlanetsService) { }
  @Query()
  async planets(@Args('id') id?: string, @Args('page') page = 1) {
    if (id !== undefined) {
      return [await this.planetsResolver.findOne(id)]
    }
    return this.planetsResolver.findAll(page)
  }
}
