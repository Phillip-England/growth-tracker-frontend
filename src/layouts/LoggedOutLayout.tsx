import { useState } from "react"

import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { LoggedOutNavMenu } from "../components/LoggedOutNavMenu"
import { Footer } from "../components/Footer"
import { NavOverlay } from "../components/NavOverlay"

export const LoggedOutLayout: React.FC = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <Navbar title={"Talent Management Portal"} nav={nav} setNav={setNav} />
      {nav ? <LoggedOutNavMenu setNav={setNav} /> : null}
      <Footer />
      {nav ? <NavOverlay setNav={setNav} /> : null}
      <div className="h-16"></div>
      <Outlet />
    </>
  )
}
