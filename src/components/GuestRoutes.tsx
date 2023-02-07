import { Navigate, Outlet } from "react-router-dom"
import { User } from "../types/User"
import { getUser } from "../lib/getUser"
import { useEffect, useState } from "react"
import { BigLoader } from "./BigLoader"

interface GuestRouteProps {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  user: User | null
}

const authUser = async () => {
  const response = await getUser()
  if (response.status == 200) {
    const data = await response.json()
    const dataObject = await JSON.parse(data.message)
    const user: User = {
      id: dataObject.id,
      username: dataObject.username,
      email: dataObject.email,
    }
    return user
  }
  return null
}

export const GuestRoutes: React.FC<GuestRouteProps> = ({
  setUser,
  user,
}: GuestRouteProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    authUser().then((userData) => {
      setUser(userData)
      setLoading(false)
    })
  }, [])

  return loading ? (
    <BigLoader />
  ) : user ? (
    <Navigate to="/app/home" />
  ) : (
    <Outlet />
  )
}
