
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import { Nav } from '../components/Nav'
import { NavMenu } from '../components/NavMenu'
import { MainContent } from '../components/MainContent'
import { Overlay } from '../components/Overlay'

export const MainLayout = ({ user }: any) => {

  const navHeight: string = "40px"
  const navMenuSpaceHeight: string = navHeight

  const navPadding: string = "var(--space-xs)"
  const spacerPadding: string = navPadding

  const [nav, setNav] = useState(false)
  const [overlay, setOverlay] = useState(false)


  return (
    <>
      <Nav navHeight={navHeight} navPadding={navPadding} setNav={setNav} nav={nav} />
      {nav ? (
        <>
          <NavMenu 
            spacerHeight={navMenuSpaceHeight} 
            spacerPadding={spacerPadding} 
            setNav={setNav}
          />
          <Overlay
            onClick={() => {setNav(false)}}
          />
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