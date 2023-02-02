import { apiUrl, appUrl } from './globals'
import { User } from '../types/User'

export const getUser = async (
  setUser: React.Dispatch<React.SetStateAction<null | User>>,
  protectedRoute: boolean
) => {
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
  } 
  if (protectedRoute == true && response.status !== 200) {
    window.location.href = appUrl + '/login'
  }
  if (protectedRoute == false && response.status === 200) {
    window.location.href = appUrl + '/app'
  }

} 