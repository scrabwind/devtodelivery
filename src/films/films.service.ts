import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { Film } from 'src/generated/graphql.js'
import { APIFilms, APIResponse } from 'SWAPISchemas/index.js'

@Injectable()
export class FilmsService {
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
}
