import { useState } from "react"

import { Navbar } from "../components/Navbar/Navbar"
import { NavMenu } from "../components/NavMenu/NavMenu"
import { Footer } from "../components/Footer/Footer"

export const LoggedOutLayout = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <Navbar title={"Talent Management Portal"} nav={nav} setNav={setNav} />
      {nav ? <NavMenu /> : null}
      <Footer />
    </>
  )
}
