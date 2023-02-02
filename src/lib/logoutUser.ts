import { apiUrl, appUrl } from "./globals"


export const logoutUser = async (setLoadingScreen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoadingScreen(true)
  const url = apiUrl + '/user/logout'
  const response = await fetch(url, {
    'method': 'GET',
    'credentials': 'include',
  })
  setLoadingScreen(false)
  if (response.status == 200) {
    window.location.href = appUrl + '/login'
  }
}