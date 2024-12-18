import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { transformedStarships } from '../../mocks/starships.js'
import { StarshipsResolver } from './starships.resolver.js'
import { StarshipsService } from './starships.service.js'

describe('starshipsResolver', () => {
  let resolver: StarshipsResolver
  let service: StarshipsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarshipsResolver, {
        provide: StarshipsService,
        useValue: {
          findOne: jest.spyOn(StarshipsService.prototype, 'findOne').mockResolvedValue(transformedStarships),
          findAll: jest.spyOn(StarshipsService.prototype, 'findAll').mockResolvedValue([transformedStarships, transformedStarships])
        }
      }]
    }).compile()

    resolver = module.get<StarshipsResolver>(StarshipsResolver)
    service = module.get<StarshipsService>(StarshipsService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should use findAll without id', async () => {
    const res = await resolver.starships()

    expect(res.length).toBeGreaterThan(1)

    expect(service.findAll).toHaveBeenCalled()
    expect(service.findOne).not.toHaveBeenCalled()
  })

  it('should use findOne with id', async () => {
    const res = await resolver.starships("1")

    expect(res.length).toEqual(1)

    expect(service.findOne).toHaveBeenCalled()
    expect(service.findAll).not.toHaveBeenCalled()
  })
})
