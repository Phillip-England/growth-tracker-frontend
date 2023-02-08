import { useContext, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { BigLoader } from "./BigLoader"
import { useEffect } from "react"
import { getUser } from "../lib/getUser"
import { User } from "../types/User"

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

interface ProtectedRoutesProps {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  user: User | null
}

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  setUser,
  user,
}: ProtectedRoutesProps) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadData = async () => {
      // forces app to wait until userData is fetched
      authUser().then((userData) => {
        setUser(userData)
        setLoading(false)
      })
    }
    loadData()
  }, [])

  return loading ? <BigLoader /> : user ? <Outlet /> : <Navigate to="/login" />
}
