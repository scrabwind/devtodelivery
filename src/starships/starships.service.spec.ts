import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { StarshipsService } from './starships.service.js'

describe('starshipsService', () => {
  let service: StarshipsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarshipsService]
    }).compile()

    service = module.get<StarshipsService>(StarshipsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
