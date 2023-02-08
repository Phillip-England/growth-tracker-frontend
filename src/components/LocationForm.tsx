import { useState } from "react"
import {
  FormLabel,
  FormTitle,
  TextInput,
  FormSubmit,
  FormLoader,
  FormError,
} from "./FormComponents"

export const LocationForm: React.FC = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <form className="m-2 flex flex-col rounded-lg bg-white p-4">
      <FormTitle text={"New Location"} />
      {error ? <FormError text={error} /> : null}
      <FormLabel text={"Name"} htmlFor={"Name"} />
      <TextInput
        value={name}
        name={"Name"}
        onChange={(e) => {
          setError("")
          setName(e.target.value)
        }}
      />
      <FormLabel text={"Location Number"} htmlFor={"Number"} />
      <TextInput
        value={number}
        name={"Number"}
        onChange={(e) => {
          setError("")
          setNumber(e.target.value)
        }}
      />
      <FormLabel text={"Location Email"} htmlFor={"Email"} />
      <TextInput
        value={email}
        name={"Email"}
        onChange={(e) => {
          setError("")
          setEmail(e.target.value)
        }}
      />
      {loading ? (
        <FormLoader />
      ) : (
        <FormSubmit
          text={"Submit"}
          onClick={async (e) => {
            e.preventDefault()
            setLoading(true)
            setError("yooo")
            setLoading(false)
          }}
        />
      )}
    </form>
  )
}
