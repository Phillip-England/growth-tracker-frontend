import { apiUrl, appUrl } from "./globals"
import { User } from "../types/User"

export const getUser = async () => {
  const url = apiUrl + "/user/get"
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  })
  return response
}
