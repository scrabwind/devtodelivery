import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { PlanetsService } from './planets.service.js'

describe('planetsService', () => {
  let service: PlanetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsService]
    }).compile()

    service = module.get<PlanetsService>(PlanetsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
