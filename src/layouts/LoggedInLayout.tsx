import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Nav } from '../components/navigation/NavComponents'
import { LoggedInNavMenu } from '../components/navigation/NavMenus'
import { MainContent } from '../components/misc/MainContent'
import { Overlay } from '../components/misc/Overlay'

export const LoggedInLayout = () => {

  const [nav, setNav] = useState(false)

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
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  )
}