
import { 
  NavMenuSpacer,
  NavMenuContainer,
  NavMenuItem
} from "./NavComponents"
import { NavLink } from "react-router-dom"

export const LoggedOutNavMenu = ({ 
  setNav
}: any) => {
  return (
    <NavMenuContainer>
      <NavMenuSpacer></NavMenuSpacer>
      <NavMenuItem>
        <NavLink 
          to="/login" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Log In</NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink 
          to="/signup" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Sign Up</NavLink>
      </NavMenuItem>
    </NavMenuContainer>
  )
}

export const LoggedInNavMenu = ({ 
  setNav
}: any) => {
  return (
    <NavMenuContainer>
      <NavMenuSpacer></NavMenuSpacer>
      <NavMenuItem>
        <NavLink 
          to="/app/home" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Home</NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink 
          to="/app/locations" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Locations</NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink 
          to="/app/logout" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Logout</NavLink>
      </NavMenuItem>
    </NavMenuContainer>
  )
}