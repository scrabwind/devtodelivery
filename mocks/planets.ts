import type { AxiosResponse } from 'axios'
import type { Planets } from 'src/generated/graphql.js'
import type { APIPlanets } from 'SWAPISchemas/index.js'
import axios, { AxiosHeaders } from 'axios'

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

export const correctRequest: AxiosResponse<APIPlanets> = {
  data: planet,
  config: {
    headers: new AxiosHeaders()
  },
  headers: {},
  status: 200,
  statusText: 'Ok'
}

export const incorrectRequest: AxiosResponse<unknown> = {
  data: {},
  config: {
    headers: new AxiosHeaders()
  },
  headers: {},
  status: 404,
  statusText: 'Not Found'
}
