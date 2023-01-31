import { useContext, useEffect, useState } from "react"
import { getUser } from "../lib/requests/getUser"
import { User } from "../types/User"
import { UserContext } from "../components/context/context"


export const Home = () => {

  const user = useContext(UserContext)

  return (
    <>
    {user ? (
      <p>{user.email}</p>
    ) : (null)}
    </>
  )
}