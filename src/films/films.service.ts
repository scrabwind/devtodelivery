import { Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import axios from 'axios'
import { Film } from 'src/generated/graphql';
import { Films } from 'SWAPISchemas/films';

@Injectable()
export class FilmsService {

  async findOne(episode_id: string): Promise<Film> {
    const { data, status } = await axios.get<Films>(`${process.env.BASE_URL}/films/${episode_id}`)
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
    const { data, status } = await axios.get<{ results: Films[] }>(`${process.env.BASE_URL}/films/`)
    const results: Film[] = data.results.map((v) => ({
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
