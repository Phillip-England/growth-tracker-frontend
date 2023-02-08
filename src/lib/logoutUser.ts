import { apiUrl } from "./globals"

export const logoutUser = async () => {
  const url = apiUrl + "/user/logout"
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  })
  return response
}
