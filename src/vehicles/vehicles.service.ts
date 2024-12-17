import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIResponse, APIVehicles } from 'SWAPISchemas/index.js'
import { Vehicles } from '../generated/graphql.js'

@Injectable()
export class VehiclesService {
  private readonly logger = new Logger(VehiclesService.name)
  async findOne(id: string) {
    const { data, status, statusText } = await axios.get<APIVehicles>(`${process.env.BASE_URL}/vehicles/${id}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Vehicles = {
      ...data,
      cargoCapacity: data.cargo_capacity,
      costInCredits: data.cost_in_credits,
      maxAtmospheringSpeed: data.max_atmosphering_speed,
      vehicleClass: data.vehicle_class
    }
    return results
  }

  async findAll(page: number) {
    const { data, status, statusText } = await axios.get<APIResponse<APIVehicles>>(`${process.env.BASE_URL}/vehicles/?page=${page}`)
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    const results: Vehicles[] = data.results.map(v => ({
      ...v,
      cargoCapacity: v.cargo_capacity,
      costInCredits: v.cost_in_credits,
      maxAtmospheringSpeed: v.max_atmosphering_speed,
      vehicleClass: v.vehicle_class
    }))

    return results
  }
}
