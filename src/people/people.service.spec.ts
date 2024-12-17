import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { PeopleService } from './people.service.js'

describe('peopleService', () => {
  let service: PeopleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService]
    }).compile()

    service = module.get<PeopleService>(PeopleService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
