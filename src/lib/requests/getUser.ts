import { apiUrl, appUrl } from '../globals'
import { User } from '../../types/User'

export const getUser = async (setUser: React.Dispatch<React.SetStateAction<null | User>>) => {
  const url = apiUrl + '/user/get'
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    const data = await response.json()
    const userData = JSON.parse(data.message)
    const user: User = {
      id: userData.id,
      username: userData.username,
      email: userData.email
    }
    setUser(user)
  } else {
    window.location.href = appUrl + '/login'
  }
} 