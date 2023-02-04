import { useState } from "react"
import { loginUser } from "../../../lib/loginUser"

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  return (
    <form className="m-2 flex flex-col rounded-lg bg-white p-4">
      <h2 className="pb-4 text-xl">Log In</h2>
      {error ? <p className="text-md pb-4 text-red-700">{error}</p> : null}
      <label className="text-md pb-1">Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setError("")
          setEmail(e.target.value)
        }}
        className="mb-4 rounded-sm border border-solid border-black p-1"
      />
      <label className="text-md pb-1">Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setError("")
          setPassword(e.target.value)
        }}
        className="mb-6 rounded-sm border border-solid border-black p-1"
      />
      {loading ? (
        <div className="mr-5 h-8 w-8 animate-spin self-end rounded-full border-4 border-solid border-gray-400 border-t-red-700"></div>
      ) : (
        <input
          type="submit"
          value="Submit"
          className="self-end rounded-sm border border-solid border-black bg-white py-1 px-3"
          onClick={async (e) => {
            e.preventDefault()
            setError("")
            setLoading(true)
            const data = await loginUser(email, password)
            setLoading(false)
            if (data.error) {
              setError(data.error)
            }
          }}
        />
      )}
    </form>
  )
}
