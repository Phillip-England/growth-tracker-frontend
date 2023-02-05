import { apiUrl, appUrl } from "./globals"

interface Body {
  username: string
  email: string
  password: string
}

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const url = apiUrl + "/user/create"
  const body: Body = {
    username: username,
    email: email,
    password: password,
  }
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return data
}
