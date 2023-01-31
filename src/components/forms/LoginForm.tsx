import { useState, useContext } from 'react'

import {
  FormContainer,
  FormTitle,
  InputLabel,
  FormInput,
  FormSubmitButton,
  FormError
} from './FormComponents'
import { Spacer } from '../misc/Spacer'
import { LoadingScreenContext } from '../misc/context'

import { User } from '../../types/User'
import { loginUser } from '../../lib/requests/loginUser'
import { FormState } from '../../types/FormState'

export const LoginForm = () => {
  
  const [email, setEmail] = useState('email@gmail.com')
  const [password, setPassword] = useState('Mypassword123!')
  const [error, setError] = useState('')
  const setLoadingScreen = useContext(LoadingScreenContext)

  return (
    <FormContainer onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault()
      const user: User = {
        email: email,
        password: password
      }
      const formState: FormState = {
        setError: setError,
        setLoadingScreen: setLoadingScreen
      }
      loginUser(user, formState)
    }}>
      <FormTitle>Log In</FormTitle>
      {error ? (
        <FormError>{error}</FormError>
      ) : (null)}
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
      <FormSubmitButton type={"submit"}>Submit</FormSubmitButton>
    </FormContainer>
  )
}