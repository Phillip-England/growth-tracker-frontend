import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { Login } from "./pages/Login/Login"
import { NoPage } from "./pages/NoPage/NoPage"
import { Signup } from "./pages/Signup/Signup"
import { Home } from "./pages/Home/Home"
import { Logout } from "./pages/Logout/Logout"
import { Locations } from "./pages/Locations/Locations"

import { LoggedOutLayout } from "./layouts/LoggedOutLayout"
import { LoggedInLayout } from "./layouts/LoggedInLayout"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { User } from "./types/User"
import { getUser } from "./lib/getUser"

const useAuth = async () => {
  const response = await getUser()
  const data = await response.json()
  const message = await JSON.parse(data.message)
  return message
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const message = useAuth().then((data) => {
      if (data == "Unauthorized") {
        setUser(null)
      } else {
        const user: User = {
          id: data.id,
          username: data.username,
          email: data.email,
        }
        setUser(user)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggedOutLayout />}>
          <Route index element={<Navigate to={"/login"} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {user ? (
          <Route path="/app" element={<LoggedInLayout />}>
            <Route element={<ProtectedRoutes user={user} />}>
              <Route index element={<Navigate to={"/app/home"} />} />
              <Route path="/app/home" element={<Home />} />
              <Route path="/app/logout" element={<Logout />} />
              <Route path="/app/locations" element={<Locations />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Route>
        ) : null}
      </Routes>
    </BrowserRouter>
  )
}

export default App
