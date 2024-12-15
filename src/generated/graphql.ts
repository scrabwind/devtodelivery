
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Film {
    episode_id: string;
    characters: string[];
    created: string;
}

export interface IQuery {
    films(episode_id?: Nullable<string>): Film[] | Promise<Film[]>;
}

type Nullable<T> = T | null;
