import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIResponse, APISpecies } from 'SWAPISchemas/index.js'
import { Species } from '../generated/graphql.js'

@Injectable()
export class SpeciesService {
  private readonly logger = new Logger(SpeciesService.name)
  async findOne(id: string) {
    const { data, status, statusText } = await axios.get<APISpecies>(`${process.env.BASE_URL}/species/${id}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Species = {
      ...data,
      averageHeight: data.average_height,
      averageLifespan: data.average_lifespan,
      eyeColors: data.eye_colors,
      hairColors: data.hair_colors,
      skinColors: data.skin_colors
    }
    return results
  }

  async findAll(page: number) {
    const { data, status, statusText } = await axios.get<APIResponse<APISpecies>>(`${process.env.BASE_URL}/species/?page=${page}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Species[] = data.results.map(v => ({
      ...v,
      averageHeight: v.average_height,
      averageLifespan: v.average_lifespan,
      eyeColors: v.eye_colors,
      hairColors: v.hair_colors,
      skinColors: v.skin_colors
    }))
    return results
  }
}
