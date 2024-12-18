import * as z from 'zod'

export const SpeciesSchema = z.object({
  average_height: z.string(),
  average_lifespan: z.string(),
  classification: z.string(),
  created: z.coerce.date(),
  designation: z.string(),
  edited: z.coerce.date(),
  eye_colors: z.string(),
  films: z.array(z.string().url()),
  hair_colors: z.string(),
  homeworld: z.string(),
  language: z.string(),
  name: z.string(),
  people: z.array(z.string().url()),
  skin_colors: z.string(),
  url: z.string().url()
})

export type Species = z.infer<typeof SpeciesSchema>
