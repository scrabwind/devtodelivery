import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { transformedSpecies } from '../../mocks/species.js'
import { SpeciesResolver } from './species.resolver.js'
import { SpeciesService } from './species.service.js'

describe('speciesResolver', () => {
  let resolver: SpeciesResolver
  let service: SpeciesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeciesResolver, {
        provide: SpeciesService,
        useValue: {
          findOne: jest.spyOn(SpeciesService.prototype, 'findOne').mockResolvedValue(transformedSpecies),
          findAll: jest.spyOn(SpeciesService.prototype, 'findAll').mockResolvedValue([transformedSpecies, transformedSpecies])
        }
      }]
    }).compile()

    resolver = module.get<SpeciesResolver>(SpeciesResolver)
    service = module.get<SpeciesService>(SpeciesService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should use findAll without id', async () => {
    const res = await resolver.species()

    expect(res.length).toBeGreaterThan(1)

    expect(service.findAll).toHaveBeenCalled()
    expect(service.findOne).not.toHaveBeenCalled()
  })

  it('should use findOne with id', async () => {
    const res = await resolver.species('1')

    expect(res.length).toEqual(1)

    expect(service.findOne).toHaveBeenCalled()
    expect(service.findAll).not.toHaveBeenCalled()
  })
})
