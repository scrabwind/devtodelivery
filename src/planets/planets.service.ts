import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIPlanets, APIResponse } from 'SWAPISchemas/index.js'
import { Planets } from '../generated/graphql.js'

@Injectable()
export class PlanetsService {
  private readonly logger = new Logger(PlanetsService.name)
  async findOne(id: string) {
    const { data, status, statusText } = await axios.get<APIPlanets>(`${process.env.BASE_URL}/planets/${id}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Planets = {
      ...data,
      orbitalPeriod: data.orbital_period,
      rotationPeriod: data.rotation_period,
      surfaceWater: data.surface_water
    }
    return results
  }

  async findAll(page: number) {
    const { data, status, statusText } = await axios.get<APIResponse<APIPlanets>>(`${process.env.BASE_URL}/planets/?page=${page}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Planets[] = data.results.map(v => ({
      ...v,
      orbitalPeriod: v.orbital_period,
      rotationPeriod: v.rotation_period,
      surfaceWater: v.surface_water
    }))

    return results
  }
}
