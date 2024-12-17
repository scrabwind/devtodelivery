import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { transformedPlanet } from '../../mocks/planets.js'
import { PlanetsResolver } from './planets.resolver.js'
import { PlanetsService } from './planets.service.js'

describe('planetsResolver', () => {
  let resolver: PlanetsResolver
  let service: PlanetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsResolver, {
        provide: PlanetsService,
        useValue: {
          findOne: jest.spyOn(PlanetsService.prototype, 'findOne').mockResolvedValue(transformedPlanet),
          findAll: jest.spyOn(PlanetsService.prototype, 'findAll').mockResolvedValue([transformedPlanet, transformedPlanet])
        }
      }]
    }).compile()

    resolver = module.get<PlanetsResolver>(PlanetsResolver)
    service = module.get<PlanetsService>(PlanetsService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should use findAll without id', async () => {
    const res = await resolver.planets()

    expect(res.length).toBeGreaterThan(1)

    expect(service.findAll).toHaveBeenCalled()
    expect(service.findOne).not.toHaveBeenCalled()
  })

  it('should use findOne with id', async () => {
    const res = await resolver.planets("1")

    expect(res.length).toEqual(1)

    expect(service.findOne).toHaveBeenCalled()
    expect(service.findAll).not.toHaveBeenCalled()
  })
})
