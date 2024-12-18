import type { TestingModule } from '@nestjs/testing'
import type { AxiosResponse } from 'axios'
import type { Planets } from 'src/generated/graphql.js'
import type { APIPlanets, APIResponse } from 'src/SWAPISchemas/index.js'
import { Test } from '@nestjs/testing'
import axios from 'axios'
import { correctRequest, incorrectRequest } from '../mocks/planets.js'
import { PlanetsService } from './planets.service.js'

jest.mock('axios')

describe('planetsService', () => {
  const mockedAxios = jest.mocked(axios)
  let service: PlanetsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsService]
    }).compile()

    service = module.get<PlanetsService>(PlanetsService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('findOne', () => {
    it('should return a planet by id', async () => {
      mockedAxios.get.mockResolvedValue(correctRequest)
      const result: Planets = await service.findOne('1')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('orbitalPeriod')
      expect(result).toHaveProperty('rotationPeriod')
      expect(result).toHaveProperty('surfaceWater')
      expect(result).toHaveProperty('diameter')
      expect(result).toHaveProperty('climate')
      expect(result).toHaveProperty('gravity')
      expect(result).toHaveProperty('terrain')
      expect(result).toHaveProperty('surfaceWater')
      expect(result).toHaveProperty('population')
      expect(result).toHaveProperty('residents')
      expect(result).toHaveProperty('films')
      expect(result).toHaveProperty('created')
      expect(result).toHaveProperty('edited')
      expect(result).toHaveProperty('url')
    })

    it('keys should not have underscore', async () => {
      mockedAxios.get.mockResolvedValue(correctRequest)
      const result: Planets = await service.findOne('1')
      expect(Object.keys(result).some(k => k.includes('_'))).toBe(false)
    })

    it('should throw error', async () => {
      expect.assertions(1)
      mockedAxios.get.mockResolvedValue(incorrectRequest)
      return expect(service.findOne('1')).rejects.toThrow()
    })
  })

  describe('findAll', () => {
    it('should return all resources on page', async () => {
      mockedAxios.get.mockImplementation(async () => {
        const response: AxiosResponse<Pick<APIResponse<APIPlanets>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIPlanets[]
          }
        }

        return Promise.resolve(response)
      })

      const res = await service.findAll(1)

      expect(Array.isArray(res)).toBeTruthy()
      expect(res.length).toBeGreaterThan(1)
    })

    it('should change results based on pagination', async () => {
      mockedAxios.get.mockImplementation(async (url) => {
        const response: AxiosResponse<Pick<APIResponse<APIPlanets>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIPlanets[]
          }
        }

        expect(url).toBeDefined()

        if (url.includes('1')) {
          return Promise.resolve(response)
        }

        if (url.includes('2')) {
          const changedResponse = Object.assign(response, response.data.results[0].name = '2nd planet')
          return Promise.resolve(changedResponse)
        }

        return Promise.resolve([])
      })

      const res1 = await service.findAll(1)
      const res2 = await service.findAll(2)

      expect(Array.isArray(res1)).toBeTruthy()
      expect(Array.isArray(res2)).toBeTruthy()
      expect(res1.length).toBeGreaterThan(1)
      expect(res2.length).toBeGreaterThan(1)
      expect(res1[0].name).not.toEqual(res2[0].name)
    })

    it('should throw error', async () => {
      expect.assertions(1)
      mockedAxios.get.mockResolvedValue(incorrectRequest)
      return expect(service.findOne('1')).rejects.toThrow()
    })
  })
})
