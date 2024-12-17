import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { SpeciesService } from './species.service'

describe('speciesService', () => {
  let service: SpeciesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeciesService]
    }).compile()

    service = module.get<SpeciesService>(SpeciesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
