import "./Navbar.css"
import { useContext, useState } from "react"

import { H2 } from "../Text/Text"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { OverlayContext } from "../Context/Context"

interface NavProps {
  title?: string
  setNav?: React.Dispatch<React.SetStateAction<boolean>>
  nav?: boolean
}

export const Navbar = ({ title, nav, setNav }: NavProps) => {
  const setOverlay = useContext(OverlayContext)

  return (
    <nav
      className={
        "w-100 border-gray-30 fixed top-0 z-50 flex h-16 w-screen border-b bg-white p-4"
      }
    >
      {nav ? (
        <FontAwesomeIcon
          icon={faX}
          className={"self-center"}
          onClick={() => {
            if (setOverlay != null && setNav != undefined) {
              setOverlay(false)
              setNav(false)
            }
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={"self-center"}
          onClick={() => {
            if (setOverlay != null && setNav != undefined) {
              setOverlay(true)
              setNav(true)
            }
          }}
        />
      )}
      <H2 text={title} className={"flex flex-grow justify-end"}></H2>
    </nav>
  )
}
