import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"

import { Login } from "./pages/Login/Login"
import { NoPage } from "./pages/NoPage/NoPage"
import { Signup } from "./pages/Signup/Signup"
import { Home } from "./pages/Home/Home"
import { Logout } from "./pages/Logout/Logout"
import { Locations } from "./pages/Locations/Locations"

import { MainLayout } from "./layouts/MainLayout/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={"/login"} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to={"/app/home"} />} />
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/logout" element={<Logout />} />
          <Route path="/app/locations" element={<Locations />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
