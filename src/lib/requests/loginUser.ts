import { FormState } from "../../types/FormState"
import { User } from "../../types/User"
import { apiUrl, appUrl } from "../globals"

export const loginUser = async (user: User, formState: FormState) => {
  formState.setError('')
  formState.setLoadingScreen(true)
  const url = apiUrl + '/user/login'
  const response = await fetch(url, {
    'method': 'POST',
    'credentials': 'include',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(user)
  })
  const data = await response.json()
  formState.setLoadingScreen(false)
  if (response.status === 400) {
    formState.setError(data.error)
  }
  if (response.status === 200) {
    window.location.href = appUrl + '/app/home'
  }
}