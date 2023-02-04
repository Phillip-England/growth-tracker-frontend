import { useState } from "react"

import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar/Navbar"
import { NavMenu } from "../../components/NavMenu/NavMenu"
import { Footer } from "../../components/Footer/Footer"
import { NavOverlay } from "../../components/NavOverlay/NavOverlay"

export const MainLayout: React.FC = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <Navbar title={"Talent Management Portal"} nav={nav} setNav={setNav} />
      {nav ? <NavMenu setNav={setNav} /> : null}
      <Footer />
      {nav ? <NavOverlay setNav={setNav} /> : null}
      <div className="h-16"></div>
      <Outlet />
    </>
  )
}
