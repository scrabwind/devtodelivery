import * as z from "zod";
import { PlanetSchema } from "./planets"
import { SpeciesSchema } from "./species"
import { StarshipsSchema } from "./starships"
import { VehiclesSchema } from "./vehicles"
import { PeopleSchema } from "./people"


export const FilmsSchema = z.object({
  "characters": z.array(z.string().url()),
  "created": z.coerce.date(),
  "director": z.string(),
  "edited": z.coerce.date(),
  "episode_id": z.number(),
  "opening_crawl": z.string(),
  "planets": z.array(z.string().url()),
  "producer": z.string(),
  "release_date": z.string(),
  "species": z.array(z.string().url()),
  "starships": z.array(z.string().url()),
  "title": z.string(),
  "url": z.string().url(),
  "vehicles": z.array(z.string().url()),
});
export type Films = z.infer<typeof FilmsSchema>;
