import { Logger } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { Film } from '../generated/graphql.js'
import { FilmsService } from './films.service.js'

@Resolver('Films')
export class FilmsResolver {
  constructor(private readonly filmService: FilmsService) { }
  private readonly logger = new Logger(FilmsResolver.name)
  @Query()
  async films(@Args('episode_id') episode_id?: string): Promise<Film[] | null> {
    if (episode_id !== undefined) {
      return [await this.filmService.findOne(episode_id)]
    }
    return this.filmService.findAll()
  }

  @Query()
  async summary(@Args('sort') sort?: 'ASC' | 'DESC'): Promise<Record<string, number>> {
    const words = await this.filmService.getDescriptions()

    const wordCounts = words.reduce<Record<string, number>>((acc, word) => {
      const lowerCaseWord = word.toLowerCase()
      if (lowerCaseWord in acc) {
        acc[lowerCaseWord] += 1
      }
      else {
        acc[lowerCaseWord] = 1
      }
      return acc
    }, {})

    if (sort) {
      const sortedWordCounts = Object.entries(wordCounts)
        .sort(([_wordA, countA], [_wordB, countB]) => sort === 'ASC' ? countA - countB : countB - countA)
        .reduce<Record<string, number>>((acc, [word, count]) => {
          acc[word] = count
          return acc
        }, {})

      return sortedWordCounts
    }

    return wordCounts
  }

  @Query()
  async frequency(): Promise<string | string[]> {
    const result = await this.filmService.getFrequency()

    return result
  }
}
