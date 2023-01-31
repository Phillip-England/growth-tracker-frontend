import { useContext, useEffect } from "react"
import { LoadingScreenContext } from "../components/misc/context"
import { LoadingScreen } from "../components/misc/Loaders"
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