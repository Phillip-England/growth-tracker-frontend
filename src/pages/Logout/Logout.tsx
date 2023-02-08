import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { logoutUser } from "../../lib/logoutUser"
import { BigLoader } from "../../components/BigLoader"

export const Logout = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const logout = async () => {
      const response = await logoutUser()
      setLoading(false)
    }
    logout()
  }, [])

  return loading ? <BigLoader /> : <Navigate to="/login" />
}
