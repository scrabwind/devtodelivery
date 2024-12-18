import type { Film } from 'src/generated/graphql.js'
import type { APIFilms } from 'src/SWAPISchemas/index.js'
import { createRequest } from './common.js'

export const films: APIFilms = {
  title: 'The Phantom Menace',
  episode_id: '1',
  opening_crawl: 'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
  director: 'George Lucas',
  producer: 'Rick McCallum',
  release_date: '1999-05-19',
  characters: [
    'https://swapi.py4e.com/api/people/2/'
  ],
  planets: [
    'https://swapi.py4e.com/api/planets/1/'
  ],
  starships: [
    'https://swapi.py4e.com/api/starships/31/'
  ],
  vehicles: [
    'https://swapi.py4e.com/api/vehicles/33/'
  ],
  species: [
    'https://swapi.py4e.com/api/species/1/'
  ],
  created: new Date('2014-12-19T16:52:55.740000Z'),
  edited: new Date('2014-12-20T10:54:07.216000Z'),
  url: 'https://swapi.py4e.com/api/films/4/'
}

export const transformedFilms: Film = {
  id: '1',
  title: 'The Phantom Menace',
  openingCrawl: 'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
  director: 'George Lucas',
  producer: 'Rick McCallum',
  releaseDate: '1999-05-19',
  characters: [
    'https://swapi.py4e.com/api/people/2/'
  ],
  planets: [
    'https://swapi.py4e.com/api/planets/1/'
  ],
  starships: [
    'https://swapi.py4e.com/api/starships/31/'
  ],
  vehicles: [
    'https://swapi.py4e.com/api/vehicles/33/'
  ],
  species: [
    'https://swapi.py4e.com/api/species/1/'
  ],
  created: new Date('2014-12-19T16:52:55.740000Z'),
  edited: new Date('2014-12-20T10:54:07.216000Z'),
  url: 'https://swapi.py4e.com/api/films/4/'
}

export const correctRequest = createRequest(films, 'correct')

export const incorrectRequest = createRequest(films, 'incorrect')

export const descriptionWords: string[] = [
  'Turmoil',
  'has',
  'engulfed',
  'the',
  'Galactic',
  'Republic',
  'The',
  'taxation',
  'of',
  'trade',
  'routes',
  'to',
  'outlying',
  'star',
  'systems',
  'is',
  'in',
  'dispute',
  'Hoping',
  'to',
  'resolve',
  'the',
  'matter',
  'with',
  'a',
  'blockade',
  'of',
  'deadly',
  'battleships',
  'the',
  'greedy',
  'Trade',
  'Federation',
  'has',
  'stopped',
  'all',
  'shipping',
  'to',
  'the',
  'small',
  'planet',
  'of',
  'Naboo',
  'While',
  'the',
  'Congress',
  'of',
  'the',
  'Republic',
  'endlessly',
  'debates',
  'this',
  'alarming',
  'chain',
  'of',
  'events',
  'the',
  'Supreme',
  'Chancellor',
  'has',
  'secretly',
  'dispatched',
  'two',
  'Jedi',
  'Knights',
  'the',
  'guardians',
  'of',
  'peace',
  'and',
  'justice',
  'in',
  'the',
  'galaxy',
  'to',
  'settle',
  'the',
  'conflict'
]
