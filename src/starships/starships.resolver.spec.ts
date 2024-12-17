import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { StarshipsResolver } from './starships.resolver.js'

describe('starshipsResolver', () => {
  let resolver: StarshipsResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarshipsResolver]
    }).compile()

    resolver = module.get<StarshipsResolver>(StarshipsResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
