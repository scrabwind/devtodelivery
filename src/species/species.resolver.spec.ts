import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { SpeciesResolver } from './species.resolver'

describe('speciesResolver', () => {
  let resolver: SpeciesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeciesResolver]
    }).compile()

    resolver = module.get<SpeciesResolver>(SpeciesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
