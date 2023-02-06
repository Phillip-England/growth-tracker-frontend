import { LoginForm } from "../../components/LoginForm"
import { Navigate } from "react-router-dom"
import { useState } from "react"

export const Login: React.FC = () => {
  const [navigate, setNavigate] = useState(false)
  return (
    <>
      {navigate ? <Navigate to={"/app/home"} /> : null}
      <LoginForm setNavigate={setNavigate} />
    </>
  )
}
