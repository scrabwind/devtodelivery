
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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
    films(id?: Nullable<string>): Film[] | Promise<Film[]>;
}

export type DateTimeISO = any;
export type URL = any;
type Nullable<T> = T | null;
