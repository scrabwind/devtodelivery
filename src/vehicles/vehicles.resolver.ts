import { Args, Query, Resolver } from '@nestjs/graphql'
import { VehiclesService } from './vehicles.service.js'

@Resolver()
export class VehiclesResolver {
  constructor(private readonly vehiclesResolver: VehiclesService) { }
  @Query()
  async vehicles(@Args('id') id?: string, @Args('page') page = 1) {
    if (id !== undefined) {
      return [await this.vehiclesResolver.findOne(id)]
    }
    return this.vehiclesResolver.findAll(page)
  }
}
