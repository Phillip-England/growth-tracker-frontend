import { NavLink } from "react-router-dom"

export const NavMenu = () => {
  return (
    <div className="fixed h-screen w-3/5 border-r border-gray-300 bg-white">
      <div className="h-16"></div>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "lightgray" : "inherit" }
        }}
        className={"text-md flex p-4"}
      >
        Log In
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "lightgray" : "inherit" }
        }}
        className={"text-md flex p-4"}
      >
        Sign Up
      </NavLink>
    </div>
  )
}
