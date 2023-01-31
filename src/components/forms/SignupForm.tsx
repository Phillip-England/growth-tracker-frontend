import { useContext, useState } from 'react'

import { registerUser } from '../../lib/requests/registerUser'
import { User } from '../../types/User'

import {
  FormContainer,
  FormTitle,
  InputLabel,
  FormInput,
  FormSubmitButton,
  FormError,
} from './FormComponents'
import { Spacer } from '../misc/Spacer'
import { FormState } from '../../types/FormState'
import { LoadingScreenContext } from '../misc/context'


export const SignupForm = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const setLoadingScreen = useContext(LoadingScreenContext)

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
        setLoadingScreen: setLoadingScreen,
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