import { Module } from '@nestjs/common'
import { VehiclesResolver } from './vehicles.resolver.js'
import { VehiclesService } from './vehicles.service.js'

@Module({
  providers: [VehiclesResolver, VehiclesService]
})
export class VehiclesModule {}
