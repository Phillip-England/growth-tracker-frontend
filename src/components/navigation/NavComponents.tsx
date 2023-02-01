import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Navigation = styled.nav`
  background-color: var(--black);  
  padding: var(--space-xs);
  display: grid;
  height: 30px;
  grid-template-columns: 1fr 1fr;
  z-index: var(--z-navbar);
  position: relative;
  border-bottom: solid var(--gray) 2px;
`

const NavTitle = styled.h1`
  color: var(--white);
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-sm);
`

const BarsIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: flex-end;
  color: var(--white);
`

const XIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: flex-end;
  color: var(--white);
`

export const NavMenuSpacer = styled.div`
  height: 30px;
  padding: var(--space-xs);
`

export const NavMenuItem = styled.div`
  padding: var(--space-xs);
  font-size: var(--font-size-sm);
  font-family: var(--font-secondary);
  color: var(--white);
`

export const NavMenuContainer = styled.div`
  height: 100vh;
  background-color: var(--black);
  width: 70%;
  position: fixed;
  z-index: var(--z-navmenu);
  border-right:solid var(--gray) 2px;
  top:0;
`

export function Nav({ navHeight, navPadding, nav, setNav }: any) {


  return(
    <Navigation>
      <NavTitle>Growth Tracker</NavTitle>
      {nav ? (
          <XIcon icon={faX} size={"lg"} onClick={() => {setNav(!nav)}}></XIcon>
        ) : (
          <BarsIcon icon={faBars} size={"lg"} onClick={() => {setNav(!nav)}}></BarsIcon>
        )}
    </Navigation>
  )
}