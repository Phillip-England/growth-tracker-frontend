import { useContext, useEffect } from "react"
import { LoadingScreenContext } from "../components/context/context"
import { LoadingScreen } from "../components/loading/Loaders"
import { logoutUser } from "../lib/requests/logoutUser"


export const Logout = () => {


  const setLoadingScreen = useContext(LoadingScreenContext)

  useEffect(() => {
    logoutUser(setLoadingScreen)
  }, [])

  return (
    <>
    </>
  )
}