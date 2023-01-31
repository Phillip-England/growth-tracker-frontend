import { useState, useEffect, createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { Nav } from '../components/navigation/NavComponents'
import { LoggedInNavMenu } from '../components/navigation/NavMenus'
import { MainContent } from '../components/misc/MainContent'
import { Overlay } from '../components/loading/Loaders'

import { User } from '../types/User'
import { getUser } from '../lib/requests/getUser'
import { LoadingScreenContext, UserContext } from '../components/context/context'

export const LoggedInLayout = () => {
  
  const [nav, setNav] = useState(false)
  const setLoadingScreen = useContext(LoadingScreenContext)

  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    getUser(setUser, true)
  }, [])

 
  return (
    <>
      <UserContext.Provider value={user}>
        <Nav setNav={setNav} nav={nav} />
        {nav ? (
          <>
            <LoggedInNavMenu setNav={setNav} />
            <Overlay onClick={() => {setNav(false)}} />
          </>
        ) : (
          null
        )}
          <MainContent>
            <Outlet />
          </MainContent>
      </UserContext.Provider>
    </>
  )
}