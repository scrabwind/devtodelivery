import type { TestingModule } from '@nestjs/testing'
import type { AxiosResponse } from 'axios'
import type { Vehicles } from 'src/generated/graphql.js'
import type { APIResponse, APIVehicles } from 'src/SWAPISchemas/index.js'
import { Test } from '@nestjs/testing'
import axios from 'axios'
import { correctRequest, incorrectRequest } from '../mocks/vehicles.js'
import { VehiclesService } from './vehicles.service.js'

jest.mock('axios')

describe('vehiclesService', () => {
  const mockedAxios = jest.mocked(axios)
  let service: VehiclesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService]
    }).compile()

    service = module.get<VehiclesService>(VehiclesService)
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
      const result: Vehicles = await service.findOne('1')
      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('model')
      expect(result).toHaveProperty('manufacturer')
      expect(result).toHaveProperty('costInCredits')
      expect(result).toHaveProperty('length')
      expect(result).toHaveProperty('maxAtmospheringSpeed')
      expect(result).toHaveProperty('crew')
      expect(result).toHaveProperty('passengers')
      expect(result).toHaveProperty('cargoCapacity')
      expect(result).toHaveProperty('consumables')
      expect(result).toHaveProperty('vehicleClass')
      expect(result).toHaveProperty('pilots')
      expect(result).toHaveProperty('films')
      expect(result).toHaveProperty('created')
      expect(result).toHaveProperty('edited')
      expect(result).toHaveProperty('url')
    })

    it('keys should not have underscore', async () => {
      mockedAxios.get.mockResolvedValue(correctRequest)
      const result: Vehicles = await service.findOne('1')
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
        const response: AxiosResponse<Pick<APIResponse<APIVehicles>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIVehicles[]
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
        const response: AxiosResponse<Pick<APIResponse<APIVehicles>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIVehicles[]
          }
        }

        expect(url).toBeDefined()

        if (url.includes('1')) {
          return Promise.resolve(response)
        }

        if (url.includes('2')) {
          const changedResponse = Object.assign(response, response.data.results[0].name = '2nd vehicle')
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
