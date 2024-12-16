import * as z from 'zod'

export const StarshipsSchema = z.object({
  cargo_capacity: z.string(),
  consumables: z.string(),
  cost_in_credits: z.string(),
  created: z.coerce.date(),
  crew: z.string(),
  edited: z.coerce.date(),
  films: z.array(z.string().url()),
  hyperdrive_rating: z.string(),
  length: z.string(),
  manufacturer: z.string(),
  max_atmosphering_speed: z.string(),
  MGLT: z.string(),
  model: z.string(),
  name: z.string(),
  passengers: z.string(),
  pilots: z.array(z.string().url()),
  starship_class: z.string(),
  url: z.string().url()
})

export type Starships = z.infer<typeof StarshipsSchema>
