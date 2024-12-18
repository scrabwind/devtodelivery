import { HttpException, Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIResponse, APIVehicles } from 'SWAPISchemas/index.js'
import { Vehicles } from '../generated/graphql.js'

@Injectable()
export class VehiclesService {
  private readonly logger = new Logger(VehiclesService.name)
  async findOne(id: string): Promise<Vehicles> {
    try {
      const { data, status, statusText } = await axios.get<APIVehicles>(`${process.env.BASE_URL}/vehicles/${id}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Vehicles = {
        id,
        cargoCapacity: data.cargo_capacity,
        consumables: data.consumables,
        costInCredits: data.cost_in_credits,
        crew: data.crew,
        manufacturer: data.manufacturer,
        maxAtmospheringSpeed: data.max_atmosphering_speed,
        model: data.model,
        passengers: data.passengers,
        pilots: data.pilots,
        vehicleClass: data.vehicle_class,
        length: data.length,
        name: data.name,
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

  async findAll(page: number): Promise<Vehicles[]> {
    try {
      const { data, status, statusText } = await axios.get<APIResponse<APIVehicles>>(`${process.env.BASE_URL}/vehicles/?page=${page}`)
      if (status !== 200) {
        await Promise.reject(new HttpException(statusText, status))
      }
      this.logger.debug(`Request Status ${status}: ${statusText}`)
      const results: Vehicles[] = data.results.map(v => ({
        id: v.url.split('/').filter(v => !!Number(v))[0],
        cargoCapacity: v.cargo_capacity,
        consumables: v.consumables,
        costInCredits: v.cost_in_credits,
        crew: v.crew,
        manufacturer: v.manufacturer,
        maxAtmospheringSpeed: v.max_atmosphering_speed,
        model: v.model,
        passengers: v.passengers,
        pilots: v.pilots,
        vehicleClass: v.vehicle_class,
        length: v.length,
        name: v.name,
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
