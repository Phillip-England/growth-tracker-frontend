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