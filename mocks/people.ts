import { APIPPeople } from "SWAPISchemas/index.js";
import { createRequest } from "./common.js";

export const people: APIPPeople = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
    "https://swapi.py4e.com/api/films/7/"
  ],
  species: [
    "https://swapi.py4e.com/api/species/1/"
  ],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/"
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/"
  ],
  created: new Date("2014-12-09T13:50:51.644000Z"),
  edited: new Date("2014-12-20T21:17:56.891000Z"),
  url: "https://swapi.py4e.com/api/people/1/"
}

export const correctRequest = createRequest(people, "correct")