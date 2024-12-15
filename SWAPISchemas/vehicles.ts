import * as z from "zod";


export const VehiclesSchema = z.object({
  "cargo_capacity": z.string(),
  "consumables": z.string(),
  "cost_in_credits": z.string(),
  "created": z.coerce.date(),
  "crew": z.string(),
  "edited": z.coerce.date(),
  "films": z.array(z.string().url()),
  "length": z.string(),
  "manufacturer": z.string(),
  "max_atmosphering_speed": z.string(),
  "model": z.string(),
  "name": z.string(),
  "passengers": z.string(),
  "pilots": z.array(z.string().url()),
  "url": z.string().url(),
  "vehicle_class": z.string(),
});
export type Vehicles = z.infer<typeof VehiclesSchema>;
