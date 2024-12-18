import type { Vehicles } from 'src/generated/graphql.js'
import type { APIVehicles } from 'SWAPISchemas/index.js'
import { createRequest } from './common.js'

export const vehicles: APIVehicles = {
  name: 'Sand Crawler',
  model: 'Digger Crawler',
  manufacturer: 'Corellia Mining Corporation',
  cost_in_credits: '150000',
  length: '36.8 ',
  max_atmosphering_speed: '30',
  crew: '46',
  passengers: '30',
  cargo_capacity: '50000',
  consumables: '2 months',
  vehicle_class: 'wheeled',
  pilots: [],
  films: [
    'https://swapi.py4e.com/api/films/1/',
    'https://swapi.py4e.com/api/films/5/'
  ],
  created: new Date('2014-12-10T15:36:25.724000Z'),
  edited: new Date('2014-12-20T21:30:21.661000Z'),
  url: 'https://swapi.py4e.com/api/vehicles/4/'
}

export const transformedVehicles: Vehicles = {
  id: '2',
  name: 'Sand Crawler',
  model: 'Digger Crawler',
  manufacturer: 'Corellia Mining Corporation',
  costInCredits: '150000',
  length: '36.8 ',
  maxAtmospheringSpeed: '30',
  crew: '46',
  passengers: '30',
  cargoCapacity: '50000',
  consumables: '2 months',
  vehicleClass: 'wheeled',
  pilots: [],
  films: [
    'https://swapi.py4e.com/api/films/1/',
    'https://swapi.py4e.com/api/films/5/'
  ],
  created: new Date('2014-12-10T15:36:25.724000Z'),
  edited: new Date('2014-12-20T21:30:21.661000Z'),
  url: 'https://swapi.py4e.com/api/vehicles/4/'
}

export const correctRequest = createRequest(vehicles, 'correct')

export const incorrectRequest = createRequest(vehicles, 'incorrect')
