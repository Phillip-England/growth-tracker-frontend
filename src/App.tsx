import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { useState } from "react"

import { Login } from "./pages/Login/Login"
import { NoPage } from "./pages/NoPage/NoPage"
import { Signup } from "./pages/Signup/Signup"
import { Home } from "./pages/Home/Home"
import { Logout } from "./pages/Logout/Logout"
import { Locations } from "./pages/Locations/Locations"

import { MainLayout } from "./layouts/MainLayout"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { User } from "./types/User"
import { getUser } from "./lib/getUser"
import { UserContext } from "./context/UserContext"
import { GuestRoutes } from "./components/GuestRoutes"

function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        {/* Routes accesible by all guests */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<GuestRoutes setUser={setUser} user={user} />}>
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Route>
          {/* Protected routes accesible by all authenticated users */}
          <Route path="/app" element={<MainLayout />}>
            <Route element={<ProtectedRoutes setUser={setUser} user={user} />}>
              <Route index element={<Navigate to={"/app/home"} />} />
              <Route path="/app/home" element={<Home />} />
              <Route path="/app/logout" element={<Logout />} />
              <Route path="/app/locations" element={<Locations />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
