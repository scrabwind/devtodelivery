import * as z from 'zod'

export const PeopleSchema = z.object({
  birth_year: z.string(),
  created: z.coerce.date(),
  edited: z.coerce.date(),
  eye_color: z.string(),
  films: z.array(z.string().url()),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string(),
  homeworld: z.string(),
  mass: z.string(),
  name: z.string(),
  skin_color: z.string(),
  species: z.array(z.string().url()),
  starships: z.array(z.string().url()),
  url: z.string().url(),
  vehicles: z.array(z.string().url())
})

export type People = z.infer<typeof PeopleSchema>
