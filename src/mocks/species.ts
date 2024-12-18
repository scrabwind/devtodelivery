import type { Species } from 'src/generated/graphql.js'
import type { APISpecies } from 'src/SWAPISchemas/index.js'
import { createRequest } from './common.js'

export const species: APISpecies = {
  name: 'Human',
  classification: 'mammal',
  designation: 'sentient',
  average_height: '180',
  skin_colors: 'caucasian, black, asian, hispanic',
  hair_colors: 'blonde, brown, black, red',
  eye_colors: 'brown, blue, green, hazel, grey, amber',
  average_lifespan: '120',
  homeworld: 'https://swapi.py4e.com/api/planets/9/',
  language: 'Galactic Basic',
  people: [
    'https://swapi.py4e.com/api/people/1/'
  ],
  films: [
    'https://swapi.py4e.com/api/films/1/'
  ],
  created: new Date('2014-12-10T13:52:11.567000Z'),
  edited: new Date('2014-12-20T21:36:42.136000Z'),
  url: 'https://swapi.py4e.com/api/species/1/'
}

export const transformedSpecies: Species = {
  id: '2',
  name: 'Human',
  classification: 'mammal',
  designation: 'sentient',
  averageHeight: '180',
  skinColors: 'caucasian, black, asian, hispanic',
  hairColors: 'blonde, brown, black, red',
  eyeColors: 'brown, blue, green, hazel, grey, amber',
  averageLifespan: '120',
  homeworld: 'https://swapi.py4e.com/api/planets/9/',
  language: 'Galactic Basic',
  people: [
    'https://swapi.py4e.com/api/people/1/'
  ],
  films: [
    'https://swapi.py4e.com/api/films/1/'
  ],
  created: new Date('2014-12-10T13:52:11.567000Z'),
  edited: new Date('2014-12-20T21:36:42.136000Z'),
  url: 'https://swapi.py4e.com/api/species/1/'
}

export const correctRequest = createRequest(species, 'correct')

export const incorrectRequest = createRequest(species, 'incorrect')
