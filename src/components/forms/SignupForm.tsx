import { useState } from 'react'

import { registerUser } from '../../lib/requests/registerUser'
import { User } from '../../lib/types/User'

import {
  FormContainer,
  FormTitle,
  InputLabel,
  FormInput,
  FormSubmitButton,
  FormError,
} from './FormComponents'
import { Spacer } from '../misc/Spacer'
import { FormState } from '../../lib/types/FormState'


export const SignupForm = ({ setOverlay, setLoader }: any) => {
  
  const [username, setUsername] = useState('Phillip')
  const [email, setEmail] = useState('a@gmail.com')
  const [password, setPassword] = useState('Password123!')
  const [error, setError] = useState('')

  return (
    
    <FormContainer onSubmit={(e: React.SyntheticEvent)=>{
      e.preventDefault()
      const user: User = {
        username: username,
        password: password,
        email: email
      }
      const formState: FormState = {
        setError: setError,
        setOverlay: setOverlay,
      }
      registerUser(user, formState)
    }}>
      <FormTitle>Sign Up</FormTitle>
      {error ? (
        <FormError>{error}</FormError>
      ) : (null)}
      <InputLabel>Username</InputLabel>
      <FormInput 
        type={"text"} 
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}  
      ></FormInput>
      <InputLabel>Email</InputLabel>
      <FormInput 
        type={"text"}
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}  
      ></FormInput>
      <InputLabel>Password</InputLabel>
      <FormInput 
        type={"text"} 
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
      ></FormInput>
      <Spacer height={'0px'} padding={"var(--space-xxs)"} />
      <FormSubmitButton type={"submit"} >Submit</FormSubmitButton>
    </FormContainer>
  )
}