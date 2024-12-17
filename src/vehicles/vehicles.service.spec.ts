import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { VehiclesService } from './vehicles.service.js'

describe('vehiclesService', () => {
  let service: VehiclesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService]
    }).compile()

    service = module.get<VehiclesService>(VehiclesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
