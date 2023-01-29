import { useState } from 'react'

import { registerUser } from '../../lib/requests/registerUser'

import {
  FormContainer,
  FormTitle,
  InputLabel,
  FormInput,
  FormSubmitButton,
  FormError
} from './FormComponents'
import { Spacer } from '../Spacer'


export const SignupForm = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  return (
    
    <FormContainer>
      <FormTitle>Signup</FormTitle>
      {error ? (
        <FormError>{errorMessage}</FormError>
      ) : (null)}
      <InputLabel>Username</InputLabel>
      <FormInput 
        type={"text"} 
        onChange={(e) => {setUsername(e.target.value)}}  
      ></FormInput>
      <InputLabel>Email</InputLabel>
      <FormInput 
        type={"text"} 
        onChange={(e) => {setEmail(e.target.value)}}  
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