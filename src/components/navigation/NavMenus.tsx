
import styled from "styled-components"

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
          to="/app/logout" 
          onClick={() => setNav(false)}
          style={({isActive, isPending}) => {
            return {
              borderBottom: isActive ? 'solid var(--lightgray) 1px' : 'inherit'
            }
        }}>Log Out</NavLink>
      </NavMenuItem>
    </NavMenuContainer>
  )
}