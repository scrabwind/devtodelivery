import type { AxiosResponse } from 'axios'
import { AxiosHeaders } from 'axios'

export function createRequest<T>(data: T, status: 'correct' | 'incorrect'): AxiosResponse<T> {
  return {
    data,
    config: {
      headers: new AxiosHeaders()
    },
    headers: {},
    status: status === 'correct' ? 200 : 404,
    statusText: status === 'correct' ? 'Ok' : 'Not Found'
  }
}
