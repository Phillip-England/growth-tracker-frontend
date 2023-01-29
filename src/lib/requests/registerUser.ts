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
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(user)
  })
  const data = await response.json()
  console.log(data.message)
  formState.setOverlay(false)
  if (response.status !== 200) {
    formState.setError(data.error)
  }
  if (response.status === (201)) {
    window.location.replace(appUrl + '/home')
  
  }
}