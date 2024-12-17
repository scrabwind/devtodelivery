
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
    species(id?: Nullable<string>, page?: Nullable<number>): Species[] | Promise<Species[]>;
}

export interface Species {
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

export type DateTimeISO = Date | string;
export type URL = _URL | string;
export type JSON = any;
type Nullable<T> = T | null;
