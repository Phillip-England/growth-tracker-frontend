
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import { Nav } from '../components/navigation/NavComponents'
import { LoggedOutNavMenu } from '../components/navigation/NavMenus'
import { MainContent } from '../components/misc/MainContent'
import { Overlay } from '../components/misc/Loaders'

export const LoggedOutLayout = () => {

  const [nav, setNav] = useState(false)

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
    </>
  )
}