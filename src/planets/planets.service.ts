import { HttpException, Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIPlanets, APIResponse } from 'SWAPISchemas/index.js'
import { Planets } from '../generated/graphql.js'

@Injectable()
export class PlanetsService {
  private readonly logger = new Logger(PlanetsService.name)
  async findOne(id: string): Promise<Planets> {
    try {
      const { data, status, statusText } = await axios.get<APIPlanets>(`${process.env.BASE_URL}/planets/${id}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Planets = {
        id,
        name: data.name,
        diameter: data.diameter,
        rotationPeriod: data.rotation_period,
        orbitalPeriod: data.orbital_period,
        gravity: data.gravity,
        population: data.population,
        climate: data.climate,
        terrain: data.terrain,
        surfaceWater: data.surface_water,
        url: data.url,
        created: data.created,
        edited: data.edited,
        films: data.films,
        residents: data.residents
      }

      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async findAll(page: number): Promise<Planets[]> {
    try {
      const { data, status, statusText } = await axios.get<APIResponse<APIPlanets>>(`${process.env.BASE_URL}/planets/?page=${page}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Planets[] = data.results.map(v => ({
        id: v.url.split('/').filter(v => !!Number(v))[0],
        name: v.name,
        diameter: v.diameter,
        rotationPeriod: v.rotation_period,
        orbitalPeriod: v.orbital_period,
        gravity: v.gravity,
        population: v.population,
        climate: v.climate,
        terrain: v.terrain,
        surfaceWater: v.surface_water,
        url: v.url,
        created: v.created,
        edited: v.edited,
        films: v.films,
        residents: v.residents
      }))
      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }
}
