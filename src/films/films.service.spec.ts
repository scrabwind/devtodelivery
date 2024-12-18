import type { TestingModule } from '@nestjs/testing'
import type { AxiosResponse } from 'axios'
import type { Film } from 'src/generated/graphql.js'
import type { APIFilms, APIResponse } from 'src/SWAPISchemas/index.js'
import { Test } from '@nestjs/testing'
import axios from 'axios'
import { correctRequest, descriptionWords, incorrectRequest, transformedFilms } from '../mocks/films.js'
import { PeopleService } from '../people/people.service.js'
import { FilmsService } from './films.service.js'

jest.mock('axios')

describe('filmsService', () => {
  const mockedAxios = jest.mocked(axios)
  let service: FilmsService
  let peopleService: PeopleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsService, PeopleService]
    }).compile()

    service = module.get<FilmsService>(FilmsService)
    peopleService = module.get<PeopleService>(PeopleService)
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
      const result: Film = await service.findOne('1')
      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('characters')
      expect(result).toHaveProperty('director')
      expect(result).toHaveProperty('openingCrawl')
      expect(result).toHaveProperty('planets')
      expect(result).toHaveProperty('producer')
      expect(result).toHaveProperty('releaseDate')
      expect(result).toHaveProperty('species')
      expect(result).toHaveProperty('starships')
      expect(result).toHaveProperty('title')
      expect(result).toHaveProperty('vehicles')
      expect(result).toHaveProperty('url')
      expect(result).toHaveProperty('created')
      expect(result).toHaveProperty('edited')
    })

    it('keys should not have underscore', async () => {
      mockedAxios.get.mockResolvedValue(correctRequest)
      const result: Film = await service.findOne('1')
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
        const response: AxiosResponse<Pick<APIResponse<APIFilms>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIFilms[]
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
        const response: AxiosResponse<Pick<APIResponse<APIFilms>, 'results'>>
        = {
          ...correctRequest,
          data: {
            results: Array.from({ length: 10 }).fill(correctRequest.data) as APIFilms[]
          }
        }

        expect(url).toBeDefined()

        if (url.includes('1')) {
          return Promise.resolve(response)
        }

        if (url.includes('2')) {
          const changedResponse = Object.assign(response, response.data.results[0].title = '2nd film')
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
      expect(res1[0].title).not.toEqual(res2[0].title)
    })

    it('should throw error', async () => {
      expect.assertions(1)
      mockedAxios.get.mockResolvedValue(incorrectRequest)
      return expect(service.findOne('1')).rejects.toThrow()
    })
  })

  describe('getDescriptions', () => {
    it('should return correct value', async () => {
      const spyedFindAll = jest.spyOn(service, 'findAll')

      spyedFindAll.mockResolvedValue([transformedFilms])

      const words = await service.getDescriptions()

      expect(words.every(v => descriptionWords.includes(v))).toBe(true)
    })
  })

  describe('getFrequency', () => {
    it('should return one name when most matches', async () => {
      const spyedFindAllNames = jest.spyOn(peopleService, 'findAllNames')
      const spyedGetDescriptions = jest.spyOn(service, 'getDescriptions')

      spyedFindAllNames.mockResolvedValue(['Jake', 'Mike'])
      spyedGetDescriptions.mockResolvedValue(['Lorem', 'Ipsum', 'Jake', 'Jake', 'Mike'])

      const mostFrequent = await service.getFrequency()

      expect(Array.isArray(mostFrequent)).toBeFalsy()

      expect(mostFrequent).toBe('Jake')
    })

    it('should return multiple names when same amount of matches', async () => {
      const spyedFindAllNames = jest.spyOn(peopleService, 'findAllNames')
      const spyedGetDescriptions = jest.spyOn(service, 'getDescriptions')

      spyedFindAllNames.mockResolvedValue(['Jake', 'Mike', 'Thomas', 'Kamil'])
      spyedGetDescriptions.mockResolvedValue(['Lorem', 'Ipsum', 'Jake', 'Jake', 'Mike', 'Mike', 'Thomas'])

      const mostFrequent = await service.getFrequency()

      expect(Array.isArray(mostFrequent)).toBeTruthy()

      expect(mostFrequent).toContain('Jake')
      expect(mostFrequent).toContain('Mike')
      expect(mostFrequent).not.toContain('Thomas')
    })
  })
})
