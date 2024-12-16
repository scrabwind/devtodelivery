import * as z from 'zod'

export const PlanetSchema = z.object({
  climate: z.string(),
  created: z.coerce.date(),
  diameter: z.string(),
  edited: z.coerce.date(),
  films: z.array(z.string().url()),
  gravity: z.string(),
  name: z.string(),
  orbital_period: z.string(),
  population: z.string(),
  residents: z.array(z.string().url()),
  rotation_period: z.string(),
  surface_water: z.string(),
  terrain: z.string(),
  url: z.string().url()
})

export type Planet = z.infer<typeof PlanetSchema>
