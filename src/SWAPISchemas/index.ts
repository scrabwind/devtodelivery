import { type Films, FilmsSchema } from './films.js'
import { type People, PeopleSchema } from './people.js'
import { type Planets, PlanetsSchema } from './planets.js'
import { type Species, SpeciesSchema } from './species.js'
import { type Starships, StarshipsSchema } from './starships.js'
import { type Vehicles, VehiclesSchema } from './vehicles.js'

type Response<T> = {
  count: number
  next: URL | string | null
  previous: URL | string | null
  results: T[]
}

export {
  type Films as APIFilms,
  FilmsSchema as APIFilmsSchema,
  type Planets as APIPlanets,
  PlanetsSchema as APIPlanetsSchema,
  type People as APIPPeople,
  PeopleSchema as APIPPeopleSchema,
  type Response as APIResponse,
  type Species as APISpecies,
  SpeciesSchema as APISpeciesSchema,
  type Starships as APIStarships,
  StarshipsSchema as APIStarshipsSchema,
  type Vehicles as APIVehicles,
  VehiclesSchema as APIVehiclesSchema
}
