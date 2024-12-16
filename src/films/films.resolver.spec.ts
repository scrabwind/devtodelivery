import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { FilmsResolver } from './films.resolver.js'

describe('filmsResolver', () => {
  let resolver: FilmsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsResolver]
    }).compile()

    resolver = module.get<FilmsResolver>(FilmsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
