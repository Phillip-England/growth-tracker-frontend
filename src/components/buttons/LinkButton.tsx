import styled from "styled-components";


export const LinkButton = styled.button`
  padding: var(--space-xxs) var(--space-xs);
  font-family: var(--font-secondary);
  font-size: var(--font-size-xs);
  background-color: var(--black);
  outline: none;
  border: solid var(--lightgray) 1px;
  border-radius: 10px;
  color: var(--red);
  width: fit-content;
  align-self: flex-end;
  &:hover{
    border:solid var(--red) 1px;
  }
`