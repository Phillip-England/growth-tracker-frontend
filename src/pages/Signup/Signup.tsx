import { SignupForm } from "../../components/SignupForm"
import { Navigate } from "react-router-dom"
import { useState } from "react"

export const Signup = () => {
  const [navigate, setNavigate] = useState(false)
  return (
    <>
      {navigate ? <Navigate to={"/login"} /> : null}
      <SignupForm setNavigate={setNavigate} />
    </>
  )
}
