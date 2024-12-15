import { Injectable } from '@nestjs/common';
import { Args, Query } from '@nestjs/graphql';
import axios from 'axios'
import { Film } from 'src/generated/graphql';
import { Films } from 'SWAPISchemas/films';

@Injectable()
export class FilmsService {

  async findOne(episode_id: string): Promise<Film> {
    const { data } = await axios.get<Films>(`${process.env.BASE_URL}/films/${episode_id}`)
    const results: Film = {
      characters: data.characters,
      created: data.created.toString(),
      episode_id: data.episode_id
    }
    return results
  }

  async findAll(): Promise<Film[]> {
    console.log(process.env.BASE_URL)
    const { data } = await axios.get<{ results: Films[] }>(`${process.env.BASE_URL}/films/`)
    console.log(data)
    const results: Film[] = data.results.map(({
      characters,
      created,
      episode_id
    }) => ({
      characters,
      created: created.toString(),
      episode_id
    }))
    return results
  }
}
