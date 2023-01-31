import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const MainLoader = styled.div`
  height:100px;
  width:100px;
  border: solid var(--lightgray) 10px;
  border-bottom-color: var(--red);
  position: fixed;
  top:30%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  z-index: var(--z-mainloader);
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--black);
  opacity: 70%;
  z-index: var(--z-overlay);
`

export const LoadingScreen = () => {
  return (
    <>
      <Overlay />
      <MainLoader />
    </>

  )
}