import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { Film } from 'src/generated/graphql.js'
import { APIFilms, APIResponse } from 'SWAPISchemas/index.js'
import { PeopleService } from '../people/people.service.js'

@Injectable()
export class FilmsService {
  constructor(private readonly peopleService: PeopleService) {}
  private readonly logger = new Logger(FilmsService.name)

  async findOne(episode_id: string): Promise<Film> {
    const { data, status, statusText } = await axios.get<APIFilms>(`${process.env.BASE_URL}/films/${episode_id}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Film = {
      ...data,
      id: data.episode_id,
      created: data.created,
      releaseDate: data.release_date,
      openingCrawl: data.opening_crawl,
      edited: data.edited
    }
    return results
  }

  async findAll(): Promise<Film[]> {
    const { data, status, statusText } = await axios.get<APIResponse<APIFilms>>(`${process.env.BASE_URL}/films/`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Film[] = data.results.map(v => ({
      ...v,
      id: v.episode_id,
      created: v.created,
      releaseDate: v.release_date,
      openingCrawl: v.opening_crawl,
      edited: v.edited
    }))
    return results
  }

  async getDescriptions(): Promise<string[]> {
    const films = await this.findAll()
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
        isArray ? (currentMostName as string[]).push(name) : currentMostName = [name]
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
