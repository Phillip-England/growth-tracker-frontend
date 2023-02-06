import { useContext } from "react"
import { NavLink } from "react-router-dom"

interface NavMenuProps {
  setNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoggedInNavMenu = ({ setNav }: NavMenuProps) => {
  return (
    <div className="fixed z-20 h-screen w-3/5 bg-white">
      <div className="h-16"></div>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : "inherit",
          }
        }}
        onClick={() => {
          setNav(false)
        }}
        className={"text-md flex p-4"}
      >
        Log In
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) => {
          return { textDecoration: isActive ? "underline" : "inherit" }
        }}
        onClick={() => {
          setNav(false)
        }}
        className={"text-md flex p-4"}
      >
        Sign Up
      </NavLink>
    </div>
  )
}
