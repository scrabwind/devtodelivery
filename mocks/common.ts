import { AxiosHeaders, AxiosResponse } from "axios"

export const createRequest = <T>(data: T, status: "correct" | "incorrect"): AxiosResponse<T> => {
  return {
    data,
    config: {
      headers: new AxiosHeaders()
    },
    headers: {},
    status: status === "correct" ? 200 : 404,
    statusText: status === "correct" ? 'Ok' : "Not Found"
  }
}