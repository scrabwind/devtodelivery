import type { Starships } from 'src/generated/graphql.js'
import type { APIStarships } from 'src/SWAPISchemas/index.js'
import { createRequest } from './common.js'

const starships: APIStarships = {
  name: 'CR90 corvette',
  model: 'CR90 corvette',
  manufacturer: 'Corellian Engineering Corporation',
  cost_in_credits: '3500000',
  length: '150',
  max_atmosphering_speed: '950',
  crew: '30-165',
  passengers: '600',
  cargo_capacity: '3000000',
  consumables: '1 year',
  hyperdrive_rating: '2.0',
  MGLT: '60',
  starship_class: 'corvette',
  pilots: [],
  films: [
    'https://swapi.py4e.com/api/films/1/'
  ],
  created: new Date('2014-12-10T14:20:33.369000Z'),
  edited: new Date('2014-12-20T21:23:49.867000Z'),
  url: 'https://swapi.py4e.com/api/starships/2/'
}

export const transformedStarships: Starships = {
  id: '2',
  name: 'CR90 corvette',
  model: 'CR90 corvette',
  manufacturer: 'Corellian Engineering Corporation',
  costInCredits: '3500000',
  length: '150',
  maxAtmospheringSpeed: '950',
  crew: '30-165',
  passengers: '600',
  cargoCapacity: '3000000',
  consumables: '1 year',
  hyperdriveRating: '2.0',
  MGLT: '60',
  starshipClass: 'corvette',
  pilots: [],
  films: [
    'https://swapi.py4e.com/api/films/1/'
  ],
  created: new Date('2014-12-10T14:20:33.369000Z'),
  edited: new Date('2014-12-20T21:23:49.867000Z'),
  url: 'https://swapi.py4e.com/api/starships/2/'
}

export const correctRequest = createRequest(starships, 'correct')

export const incorrectRequest = createRequest(starships, 'incorrect')
