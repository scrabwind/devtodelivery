import axios, { AxiosResponse } from 'axios'
import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { PeopleService } from './people.service.js'
import { correctRequest, people } from '../../mocks/people.js'
import { APIPPeople, APIResponse } from 'SWAPISchemas/index.js'

jest.mock('axios')

describe('peopleService', () => {
  const mockedAxios = jest.mocked(axios)
  let service: PeopleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService]
    }).compile()

    service = module.get<PeopleService>(PeopleService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return correct data', async () => {
    const spyGetAllData = jest.spyOn(service, 'getAllData');
    spyGetAllData.mockImplementation(async () => {
      Object.defineProperty(service, 'peopleResults', {
        value: [people, people],
        writable: true
      })

      Promise.resolve()
    })


    const results = await service.findAllNames()

    expect(results.length).toEqual(2)
    expect(results[0]).toEqual("Luke Skywalker")
    expect(results[1]).toEqual("Luke Skywalker")
  })

  it('should called multiple times with multiple pages', async () => {
    let callCounter = 0

    mockedAxios.get.mockImplementation(async () => {
      const url = callCounter === 0 ? "nextUrl" : null
      const response: AxiosResponse<APIResponse<APIPPeople>, 'results'> =
      {
        ...correctRequest,
        data: {
          results: [],
          next: callCounter === 0 ? "nextUrl" : null,
          count: 2,
          previous: ""
        }
      }

      console.log(url)

      callCounter++

      return Promise.resolve(response)
    })
    const spyGetAllData = jest.spyOn(service, 'getAllData');

    await service.findAllNames()

    expect(spyGetAllData).toHaveBeenCalledTimes(2)

  })
})
