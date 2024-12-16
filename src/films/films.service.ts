import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { Film } from 'src/generated/graphql.js'
import { Films } from 'SWAPISchemas/films.js'

@Injectable()
export class FilmsService {
  async findOne(episode_id: string): Promise<Film> {
    const { data, status, statusText } = await axios.get<Films>(`${process.env.BASE_URL}/films/${episode_id}`)
    if (status !== 200) {
      console.error(`Error ${status}: ${statusText}`)
    }
    const results: Film = {
      ...data,
      id: data.episode_id,
      created: data.created.toString(),
      releaseDate: data.release_date.toString(),
      openingCrawl: data.opening_crawl,
      edited: data.edited.toString()
    }
    return results
  }

  async findAll(): Promise<Film[]> {
    const { data, status, statusText } = await axios.get<{ results: Films[] }>(`${process.env.BASE_URL}/films/`)
    if (status !== 200) {
      console.error(`Error ${status}: ${statusText}`)
    }
    const results: Film[] = data.results.map(v => ({
      ...v,
      id: v.episode_id,
      created: v.created.toString(),
      releaseDate: v.release_date.toString(),
      openingCrawl: v.opening_crawl,
      edited: v.edited.toString()
    }))
    return results
  }
}
