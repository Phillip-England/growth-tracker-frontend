import { apiUrl, appUrl } from "./globals"

interface Body {
  email: string
  password: string
}

export const loginUser = async (email: string, password: string) => {
  const url = apiUrl + "/user/login"
  const body: Body = {
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
