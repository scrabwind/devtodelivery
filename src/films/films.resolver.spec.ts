import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { transformedFilms } from '../../mocks/films.js'
import { FilmsResolver } from './films.resolver.js'
import { FilmsService } from './films.service.js'

describe('filmsResolver', () => {
  let resolver: FilmsResolver
  let service: FilmsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsResolver, {
        provide: FilmsService,
        useValue: {
          findOne: jest.spyOn(FilmsService.prototype, 'findOne').mockResolvedValue(transformedFilms),
          findAll: jest.spyOn(FilmsService.prototype, 'findAll').mockResolvedValue([transformedFilms, transformedFilms])
        }
      }]
    }).compile()

    resolver = module.get<FilmsResolver>(FilmsResolver)
    service = module.get<FilmsService>(FilmsService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should use findAll without id', async () => {
    const res = await resolver.films()

    expect(res.length).toBeGreaterThan(1)

    expect(service.findAll).toHaveBeenCalled()
    expect(service.findOne).not.toHaveBeenCalled()
  })

  it('should use findOne with id', async () => {
    const res = await resolver.films('1')

    expect(res.length).toEqual(1)

    expect(service.findOne).toHaveBeenCalled()
    expect(service.findAll).not.toHaveBeenCalled()
  })
})
