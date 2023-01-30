import { useEffect, useState } from "react"
import { getUser } from "../lib/requests/getUser"




export const Home = () => {

  const [user, setUser] = useState(null)
  useEffect(() => {
    getUser(setUser)
  }, [])

  console.log(user)

  return (
    <>
    {user ? (
      <p>{user.id}</p>
    ) : (null)}
    </>
  )
}