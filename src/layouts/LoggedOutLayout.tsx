
import { Outlet } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

import { Nav } from '../components/navigation/NavComponents'
import { LoggedOutNavMenu } from '../components/navigation/NavMenus'
import { MainContent } from '../components/misc/MainContent'
import { Overlay } from '../components/loading/Loaders'
import { Footer } from '../components/footer/Footer'

import { User } from '../types/User'
import { getUser } from '../lib/requests/getUser'
import { LoadingScreenContext } from '../components/context/context'

export const LoggedOutLayout = () => {

  const [nav, setNav] = useState(false)
  const setLoadingScreen = useContext(LoadingScreenContext)

  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    getUser(setUser, false)
  }, [])

  return (
    <>
      <Nav setNav={setNav} nav={nav} />
      {nav ? (
        <>
          <LoggedOutNavMenu setNav={setNav} />
          <Overlay onClick={() => {setNav(false)}} />
        </>
      ) : (
        null
      )}
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )
}