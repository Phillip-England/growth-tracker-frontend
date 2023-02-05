import { useState } from "react"
import { loginUser } from "../../lib/loginUser"
import {
  FormError,
  FormTitle,
  FormLabel,
  TextInput,
  FormLoader,
  FormSubmit,
} from "./FormComponents"

interface LoginFormProps {
  setNavigate: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginForm: React.FC<LoginFormProps> = ({
  setNavigate,
}: LoginFormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <form className="m-2 flex flex-col rounded-lg bg-white p-4">
      <FormTitle text={"Log In"} />
      {error ? <FormError text={error} /> : null}
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
            const data = await loginUser(email, password)
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
