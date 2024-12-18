import { HttpException, Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIResponse, APISpecies } from 'SWAPISchemas/index.js'
import { Species } from '../generated/graphql.js'

@Injectable()
export class SpeciesService {
  private readonly logger = new Logger(SpeciesService.name)
  async findOne(id: string): Promise<Species> {
    try {
      const { data, status, statusText } = await axios.get<APISpecies>(`${process.env.BASE_URL}/species/${id}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Species = {
        id,
        name: data.name,
        averageHeight: data.average_height,
        averageLifespan: data.average_lifespan,
        classification: data.classification,
        designation: data.designation,
        eyeColors: data.eye_colors,
        hairColors: data.hair_colors,
        homeworld: data.homeworld,
        language: data.language,
        people: data.people,
        skinColors: data.skin_colors,
        url: data.url,
        created: data.created,
        edited: data.edited,
        films: data.films
      }

      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async findAll(page: number): Promise<Species[]> {
    try {
      const { data, status, statusText } = await axios.get<APIResponse<APISpecies>>(`${process.env.BASE_URL}/species/?page=${page}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Species[] = data.results.map(v => ({
        id: v.url.split('/').filter(v => !!Number(v))[0],
        name: v.name,
        averageHeight: v.average_height,
        averageLifespan: v.average_lifespan,
        classification: v.classification,
        designation: v.designation,
        eyeColors: v.eye_colors,
        hairColors: v.hair_colors,
        homeworld: v.homeworld,
        language: v.language,
        people: v.people,
        skinColors: v.skin_colors,
        url: v.url,
        created: v.created,
        edited: v.edited,
        films: v.films
      }))
      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }
}
