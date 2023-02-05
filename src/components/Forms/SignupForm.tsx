import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import {
  FormTitle,
  FormError,
  FormLabel,
  TextInput,
  FormLoader,
  FormSubmit,
} from "./FormComponents"
import { registerUser } from "../../lib/registerUser"

interface SignUpFormProps {
  setNavigate: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignupForm: React.FC<SignUpFormProps> = ({
  setNavigate,
}: SignUpFormProps) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <form className="m-2 flex flex-col rounded-lg bg-white p-4">
      <FormTitle text={"Sign Up"} />
      {error ? <FormError text={error} /> : null}
      <FormLabel text={"Username"} htmlFor={"Username"} />
      <TextInput
        value={username}
        name={"Username"}
        onChange={(e) => {
          setError("")
          setUsername(e.target.value)
        }}
      />
      <FormLabel text={"Email"} htmlFor={"Email"} />
      <TextInput
        value={email}
        name={"Email"}
        onChange={(e) => {
          setError("")
          setEmail(e.target.value)
        }}
      />
      <FormLabel text={"Password"} htmlFor={"Password"} />
      <TextInput
        value={password}
        name={"Password"}
        onChange={(e) => {
          setError("")
          setPassword(e.target.value)
        }}
      />
      {loading ? (
        <FormLoader />
      ) : (
        <FormSubmit
          text={"Submit"}
          onClick={async (e) => {
            e.preventDefault()
            setError("")
            setLoading(true)
            const data = await registerUser(username, email, password)
            setLoading(false)
            if (data.error) {
              setError(data.error)
            } else {
              setError("")
              setNavigate(true)
            }
          }}
        />
      )}
    </form>
  )
}
