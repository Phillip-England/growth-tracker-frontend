import { apiUrl } from './globals'

export const getUser = async (useStateCall: React.Dispatch<React.SetStateAction<null>>) => {
  const url = apiUrl + '/user/get'
  const response = await fetch(url)
  const data = await response.json()
  if (response.status == 200) {
    useStateCall(data.message)
  }
} 