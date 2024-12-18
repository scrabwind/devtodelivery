/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

import { URL as _URL } from 'url'

export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}

export interface Film {
    id: string;
    characters: Nullable<URL>[];
    created: DateTimeISO;
    director: string;
    edited: DateTimeISO;
    openingCrawl: string;
    planets: Nullable<URL>[];
    producer: string;
    releaseDate: string;
    species: Nullable<URL>[];
    starships: Nullable<URL>[];
    title: string;
    url: URL;
    vehicles: Nullable<URL>[];
}

export interface IQuery {
    films(id?: Nullable<string>, page?: Nullable<number>): Film[] | Promise<Film[]>;
    summary(sort?: Nullable<SortOrder>): JSON | Promise<JSON>;
    frequency(): JSON | Promise<JSON>;
    planets(id?: Nullable<string>, page?: Nullable<number>): Planets[] | Promise<Planets[]>;
    species(id?: Nullable<string>, page?: Nullable<number>): Species[] | Promise<Species[]>;
    starships(id?: Nullable<string>, page?: Nullable<number>): Starships[] | Promise<Starships[]>;
    vehicles(id?: Nullable<string>, page?: Nullable<number>): Vehicles[] | Promise<Vehicles[]>;
}

export interface Planets {
    id: string;
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: URL[];
    gravity: string;
    name: string;
    orbitalPeriod: string;
    population: string;
    residents: URL[];
    rotationPeriod: string;
    surfaceWater: string;
    terrain: string;
    url: URL;
}

export interface Species {
    id: string;
    averageHeight: string;
    averageLifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eyeColors: string;
    films: URL[];
    hairColors: string;
    homeworld: string;
    language: string;
    name: string;
    people: URL[];
    skinColors: string;
    url: URL;
}

export interface Starships {
    id: string;
    cargoCapacity: string;
    consumables: string;
    costInCredits: string;
    created: Date;
    crew: string;
    edited: Date;
    films: URL[];
    hyperdriveRating: string;
    length: string;
    manufacturer: string;
    maxAtmospheringSpeed: string;
    MGLT: string;
    model: string;
    name: string;
    passengers: string;
    pilots: URL[];
    starshipClass: string;
    url: URL;
}

export interface Vehicles {
    id: string;
    cargoCapacity: string;
    consumables: string;
    costInCredits: string;
    created: Date;
    crew: string;
    edited: Date;
    films: URL[];
    length: string;
    manufacturer: string;
    maxAtmospheringSpeed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: URL[];
    url: URL;
    vehicleClass: string;
}

export type DateTimeISO = Date | string;
export type URL = _URL | string;
export type JSON = any;
type Nullable<T> = T | null;
