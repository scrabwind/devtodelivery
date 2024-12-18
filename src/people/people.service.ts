import { Injectable, Logger } from '@nestjs/common'
import axios from 'axios'
import { APIPPeople, APIResponse } from 'SWAPISchemas/index.js'

@Injectable()
export class PeopleService {
  private readonly logger = new Logger(PeopleService.name)
  private peopleResults: APIPPeople[] = []

  async getAllData(url: URL | string | null): Promise<void> {
    let nextUrl = url

    const { status, statusText, data } = await axios.get<APIResponse<APIPPeople>>(String(url))
    if (status !== 200) {
      this.logger.error(`Error ${status}: ${statusText}`)
    }
    this.peopleResults.push(...data.results)
    if (data.next === null) {
      return
    }
    nextUrl = data.next
    await this.getAllData(nextUrl)
  }

  async findAllNames(): Promise<string[]> {
    this.peopleResults = []

    await this.getAllData(`${process.env.BASE_URL}/people/`)

    console.log(this.peopleResults[0])
    return this.peopleResults.map(v => v.name)
  }
}
