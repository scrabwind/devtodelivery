import { HttpException, Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIStarships, APIResponse } from 'SWAPISchemas/index.js'
import { Starships } from '../generated/graphql.js'

@Injectable()
export class StarshipsService {
  private readonly logger = new Logger(StarshipsService.name)
  async findOne(id: string): Promise<Starships> {
    try {
      const { data, status, statusText } = await axios.get<APIStarships>(`${process.env.BASE_URL}/starships/${id}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Starships = {
        id,
        cargoCapacity: data.cargo_capacity,
        consumables: data.consumables,
        costInCredits: data.cost_in_credits,
        crew: data.crew,
        hyperdriveRating: data.hyperdrive_rating,
        manufacturer: data.manufacturer,
        maxAtmospheringSpeed: data.max_atmosphering_speed,
        model: data.model,
        MGLT: data.MGLT,
        passengers: data.passengers,
        pilots: data.pilots,
        starshipClass: data.starship_class,
        length: data.length,
        name: data.name,
        url: data.url,
        created: data.created,
        edited: data.edited,
        films: data.films,
      }

      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }

  async findAll(page: number): Promise<Starships[]> {
    try {
      const { data, status, statusText } = await axios.get<APIResponse<APIStarships>>(`${process.env.BASE_URL}/starships/?page=${page}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Starships[] = data.results.map(v => ({
        id: v.url.split('/').filter(v => !!Number(v))[0],
        cargoCapacity: v.cargo_capacity,
        consumables: v.consumables,
        costInCredits: v.cost_in_credits,
        crew: v.crew,
        hyperdriveRating: v.hyperdrive_rating,
        manufacturer: v.manufacturer,
        maxAtmospheringSpeed: v.max_atmosphering_speed,
        model: v.model,
        MGLT: v.MGLT,
        passengers: v.passengers,
        pilots: v.pilots,
        starshipClass: v.starship_class,
        length: v.length,
        name: v.name,
        url: v.url,
        created: v.created,
        edited: v.edited,
        films: v.films,
      }))
      return await Promise.resolve(results)
    }
    catch (error) {
      return Promise.reject(error)
    }
  }
}
