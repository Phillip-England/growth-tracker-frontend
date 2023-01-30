import { apiUrl, appUrl } from '../globals'

export const getUser = async (setUser: React.Dispatch<React.SetStateAction<null>>) => {
  const url = apiUrl + '/user/get'
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include'
  })
  if (response.status == 200) {
    const data = await response.json()
    const user = JSON.parse(data.message)
    setUser(user)
  } else {
    window.location.href = appUrl + '/login'
  }
} 