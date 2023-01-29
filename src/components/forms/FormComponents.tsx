import styled from "styled-components"


export const FormContainer = styled.form`
  padding: var(--space-xs);
  margin: var(--space-xs);
  border-radius: 5px;
  display:flex;
  flex-direction: column;
  background-color: var(--black);
  border: solid var(--gray) 2px;
`
export const FormTitle = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-md); 
  color: var(--white);
  margin-bottom: var(--space-xxs);
`

export const InputLabel = styled.label`
  font-family: var(--font-secondary);
  font-size: var(--font-size-xs);
  margin-bottom: var(--space-xxs);
  color: var(--white);
  font-weight: var(--font-weight-sm);
`
  
export const FormInput = styled.input`
  background-color: var(--black);
  padding: var(--space-xxs);
  outline: none;
  border: none;
  font-family: var(--font-secondary);
  font-size: var(--font-size-xxs);
  margin-bottom:var(--space-xs); 
  border: solid var(--gray) 1px;
  color: var(--yellow);
  &:focus {
    border: solid var(--yellow) 1px;
  }
`

export const FormSubmitButton = styled.button`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-md);
  width: fit-content;
  outline: none; 
  padding: var(--space-xxxs) var(--space-xs);
  background-color: var(--black);
  color: var(--white);
  font-family: var(--font-primary);
  align-self: flex-end;
  border: solid var(--gray) 1px;
  &:focus {
    border: solid var(--yellow) 1px;
    color: var(--yellow);
  }
`

export const FormError = styled.p`
  margin-bottom: var(--space-xs);
  padding: var(--space-sm) 0;
  color: var(--yellow);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-md);
  background-color: var(--black);
  border: solid var(--yellow) 1px;
  padding: var(--space-sm);
  font-size: var(--font-size-xs);
`