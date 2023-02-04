import "./Navbar.css"
import { useContext, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

interface NavProps {
  title?: string
  setNav: React.Dispatch<React.SetStateAction<boolean>>
  nav: boolean
}

export const Navbar = ({ title, nav, setNav }: NavProps) => {
  return (
    <nav
      className={
        "fixed top-0 z-30 flex h-16 w-screen items-center bg-white p-4"
      }
    >
      {nav ? (
        <FontAwesomeIcon
          icon={faX}
          className={"self-center"}
          onClick={() => {
            setNav(false)
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={"self-center"}
          onClick={() => {
            setNav(true)
          }}
        />
      )}
      <h2 className="text-md flex flex-grow justify-end">
        Talent Management Portal
      </h2>
    </nav>
  )
}
