
import styled from "styled-components"

import { Spacer } from "./Spacer"
import { NavLink } from "react-router-dom"


const NavMenuContainer = styled.div`
  height: 100vh;
  background-color: var(--black);
  width: 70%;
  position: fixed;
  z-index: var(--z-navmenu);
  border-right:solid var(--gray) 2px;
  top:0;
`

const NavMenuItem = styled.div`
  padding: var(--space-xs);
  font-size: var(--font-size-sm);
  font-family: var(--font-primary);
  color: var(--white);
`

export const NavMenu = ({ 
  spacerHeight, 
  spacerPadding,
  setNav
}: any) => {


  return (
    <NavMenuContainer>
      <Spacer height={spacerHeight} padding={spacerPadding}></Spacer>
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