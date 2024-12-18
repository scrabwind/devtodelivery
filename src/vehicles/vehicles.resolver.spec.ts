import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { transformedVehicles } from '../../mocks/vehicles.js'
import { VehiclesResolver } from './vehicles.resolver.js'
import { VehiclesService } from './vehicles.service.js'

describe('vehiclesResolver', () => {
  let resolver: VehiclesResolver
  let service: VehiclesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesResolver, {
        provide: VehiclesService,
        useValue: {
          findOne: jest.spyOn(VehiclesService.prototype, 'findOne').mockResolvedValue(transformedVehicles),
          findAll: jest.spyOn(VehiclesService.prototype, 'findAll').mockResolvedValue([transformedVehicles, transformedVehicles])
        }
      }]
    }).compile()

    resolver = module.get<VehiclesResolver>(VehiclesResolver)
    service = module.get<VehiclesService>(VehiclesService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should use findAll without id', async () => {
    const res = await resolver.vehicles()

    expect(res.length).toBeGreaterThan(1)

    expect(service.findAll).toHaveBeenCalled()
    expect(service.findOne).not.toHaveBeenCalled()
  })

  it('should use findOne with id', async () => {
    const res = await resolver.vehicles("1")

    expect(res.length).toEqual(1)

    expect(service.findOne).toHaveBeenCalled()
    expect(service.findAll).not.toHaveBeenCalled()
  })
})
