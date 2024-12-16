import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { FilmsService } from './films.service.js'

describe('filmsService', () => {
  let service: FilmsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsService]
    }).compile()

    service = module.get<FilmsService>(FilmsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
