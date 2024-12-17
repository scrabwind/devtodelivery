import { Module } from '@nestjs/common'
import { PlanetsResolver } from './planets.resolver.js'
import { PlanetsService } from './planets.service.js'

@Module({
  providers: [PlanetsResolver, PlanetsService]
})
export class PlanetsModule {}
