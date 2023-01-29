import styled, { StyledComponent } from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
  opacity: 60%;
  z-index: var(--z-overlay);
`