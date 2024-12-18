import type { Planets } from 'src/generated/graphql.js'
import type { APIPlanets } from 'SWAPISchemas/index.js'
import { createRequest } from './common.js'

export const planet: APIPlanets = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [
    'https://swapi.py4e.com/api/people/1/',
  ],
  films: [
    'https://swapi.py4e.com/api/films/1/',
  ],
  created: new Date('2014-12-09T13:50:49.641000Z'),
  edited: new Date('2014-12-20T20:58:18.411000Z'),
  url: 'https://swapi.py4e.com/api/planets/1/'
}

export const transformedPlanet: Planets = {
  id: '1',
  name: 'Tatooine',
  rotationPeriod: '23',
  orbitalPeriod: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surfaceWater: '1',
  population: '200000',
  residents: [
    'https://swapi.py4e.com/api/people/1/',
  ],
  films: [
    'https://swapi.py4e.com/api/films/1/',
  ],
  created: new Date('2014-12-09T13:50:49.641000Z'),
  edited: new Date('2014-12-20T20:58:18.411000Z'),
  url: 'https://swapi.py4e.com/api/planets/1/'
}

export const correctRequest = createRequest(planet, "correct")

export const incorrectRequest = createRequest(planet, "incorrect")
