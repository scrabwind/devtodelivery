import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { VehiclesResolver } from './vehicles.resolver.js'

describe('vehiclesResolver', () => {
  let resolver: VehiclesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesResolver]
    }).compile()

    resolver = module.get<VehiclesResolver>(VehiclesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
