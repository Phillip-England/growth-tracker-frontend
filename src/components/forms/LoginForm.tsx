import { useState } from 'react'

import {
  FormContainer,
  FormTitle,
  InputLabel,
  FormInput,
  FormSubmitButton
} from './FormComponents'

import { Spacer } from '../Spacer'


export const LoginForm = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
      <FormTitle>Log In</FormTitle>
      <InputLabel>Username</InputLabel>
      <FormInput 
        type={"text"} 
        onChange={(e) => {setUsername(e.target.value)}}  
      ></FormInput>
      <InputLabel>Password</InputLabel>
      <FormInput 
        type={"text"} 
        onChange={(e) => {setPassword(e.target.value)}}
      ></FormInput>
      <Spacer height={'0px'} padding={"var(--space-xxs)"} />
      <FormSubmitButton type={"button"}>Submit</FormSubmitButton>
    </FormContainer>
  )
}