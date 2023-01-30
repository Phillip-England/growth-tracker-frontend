import { apiUrl, appUrl } from "../globals"
import { FormState } from "../types/FormState"
import { User } from "../types/User"

export const registerUser = async (
  user: User, 
  formState: FormState
) => {
  formState.setError('')
  formState.setOverlay(true)
  const url = apiUrl + '/user/create'
  const response = await fetch(url, {
    'method': 'POST',
    'credentials': "include",
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(user)
  })
  const data = await response.json()
  formState.setOverlay(false)
  if (response.status == 400) {
    formState.setError(data.error)
  }
  if (response.status === (201)) {
    window.location.href = appUrl + '/app'
  }
}