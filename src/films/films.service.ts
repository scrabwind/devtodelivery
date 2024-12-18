import { HttpException, Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIFilms, APIResponse } from 'src/SWAPISchemas/index.js'
import { Film } from '../generated/graphql.js'
import { PeopleService } from '../people/people.service.js'

@Injectable()
export class FilmsService {
  constructor(private readonly peopleService: PeopleService) { }
  private readonly logger = new Logger(FilmsService.name)

  async findOne(id: string): Promise<Film> {
    try {
      const { data, status, statusText } = await axios.get<APIFilms>(`${process.env.BASE_URL}/films/${id}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Film = {
        id,
        characters: data.characters,
        director: data.director,
        openingCrawl: data.opening_crawl,
        planets: data.planets,
        producer: data.producer,
        releaseDate: data.release_date,
        species: data.species,
        starships: data.starships,
        title: data.title,
        vehicles: data.vehicles,
        url: data.url,
        created: data.created,
        edited: data.edited
      }

      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async findAll(page: number): Promise<Film[]> {
    try {
      const { data, status, statusText } = await axios.get<APIResponse<APIFilms>>(`${process.env.BASE_URL}/films/?page=${page}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Film[] = data.results.map(v => ({
        id: v.url.split('/').filter(v => !!Number(v))[0],
        characters: v.characters,
        director: v.director,
        openingCrawl: v.opening_crawl,
        planets: v.planets,
        producer: v.producer,
        releaseDate: v.release_date,
        species: v.species,
        starships: v.starships,
        title: v.title,
        vehicles: v.vehicles,
        url: v.url,
        created: v.created,
        edited: v.edited
      }))
      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async getDescriptions(): Promise<string[]> {
    const films = await this.findAll(1)
    const words = films.flatMap(film => film.openingCrawl)
      .toString()
      .replace(/[,.]|'s/g, ' ')
      .split(/\s/)
      .filter(v => v)

    return words
  }

  async getFrequency(): Promise<string | string[]> {
    let mostMatches = 0
    let currentMostName: string | string[] = ''
    const words = await this.getDescriptions()
    const names = await this.peopleService.findAllNames()

    const wordsString = words.join('')

    for (const name of names) {
      // eslint-disable-next-line no-control-regex
      const matches = wordsString.matchAll(new RegExp(name.replace(/[\x00-\x1F\x7F\s]/g, ''), 'g')).toArray()
      const occurances = matches.length

      if (occurances === 0) {
        continue
      }

      if (occurances === mostMatches) {
        const isArray = Array.isArray(currentMostName)
        isArray ? (currentMostName as string[]).push(name) : currentMostName = [currentMostName as string, name]
        continue
      }

      if (occurances > mostMatches) {
        currentMostName = name
        mostMatches = occurances
      }
    }

    return currentMostName
  }
}
