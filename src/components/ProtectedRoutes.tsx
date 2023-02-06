import { Navigate, Outlet } from "react-router-dom"
import { User } from "../types/User"

interface ProtectedRoutesProps {
  user: User | null
}

export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({
  user,
}: ProtectedRoutesProps) => {
  console.log(user)
  return user ? <Outlet /> : <Navigate to="/login" />
}
