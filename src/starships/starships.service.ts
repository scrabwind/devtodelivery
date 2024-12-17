import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIResponse, APIStarships } from 'SWAPISchemas/index.js'
import { Starships } from '../generated/graphql.js'

@Injectable()
export class StarshipsService {
  private readonly logger = new Logger(StarshipsService.name)
  async findOne(id: string) {
    const { data, status, statusText } = await axios.get<APIStarships>(`${process.env.BASE_URL}/starships/${id}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Starships = {
      ...data,
      cargoCapacity: data.cargo_capacity,
      costInCredits: data.cost_in_credits,
      maxAtmospheringSpeed: data.max_atmosphering_speed,
      starshipClass: data.starship_class,
      hyperdriveRating: data.hyperdrive_rating
    }
    return results
  }

  async findAll(page: number) {
    const { data, status, statusText } = await axios.get<APIResponse<APIStarships>>(`${process.env.BASE_URL}/starships/?page=${page}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Starships[] = data.results.map(v => ({
      ...v,
      cargoCapacity: v.cargo_capacity,
      costInCredits: v.cost_in_credits,
      maxAtmospheringSpeed: v.max_atmosphering_speed,
      starshipClass: v.starship_class,
      hyperdriveRating: v.hyperdrive_rating
    }))

    return results
  }
}
