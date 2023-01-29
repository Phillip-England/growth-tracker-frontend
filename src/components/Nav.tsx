import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Navigation = styled.nav<{ height: string, padding: string}>`
  background-color: var(--black);  
  padding: ${props => props.padding ? props.padding : 'auto'};
  display: grid;
  height: ${props => props.height ? props.height : 'auto'} ;
  grid-template-columns: 1fr 1fr;
  z-index: var(--z-navbar);
  position: relative;
  border-bottom: solid var(--gray) 2px;
`

const NavTitle = styled.h1`
  color: var(--white);
  font-family: var(--font-primary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-md);
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

export function Nav({ navHeight, navPadding, nav, setNav }: any) {


  return(
    <Navigation height={navHeight} padding={navPadding}>
      <NavTitle>Growth Tracker</NavTitle>
      {nav ? (
          <XIcon icon={faX} size={"xl"} onClick={() => {setNav(!nav)}}></XIcon>
        ) : (
          <BarsIcon icon={faBars} size={"xl"} onClick={() => {setNav(!nav)}}></BarsIcon>
        )}
    </Navigation>
  )
}