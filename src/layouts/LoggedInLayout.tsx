import { useState, useEffect, createContext } from 'react'
import { Outlet } from 'react-router-dom'

import { Nav } from '../components/navigation/NavComponents'
import { LoggedInNavMenu } from '../components/navigation/NavMenus'
import { MainContent } from '../components/misc/MainContent'
import { Overlay } from '../components/misc/Loaders'

import { User } from '../types/User'
import { getUser } from '../lib/requests/getUser'
import { UserContext } from '../components/misc/context'

export const LoggedInLayout = () => {
  
  const [nav, setNav] = useState(false)
  
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    getUser(setUser)
  }, [])

 
  return (
    <>
      <Nav setNav={setNav} nav={nav} />
      {nav ? (
        <>
          <LoggedInNavMenu setNav={setNav} />
          <Overlay onClick={() => {setNav(false)}} />
        </>
      ) : (
        null
      )}
      <UserContext.Provider value={user}>
        <MainContent>
          <Outlet />
        </MainContent>
      </UserContext.Provider>
    </>
  )
}