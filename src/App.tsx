import { Route, BrowserRouter, Routes } from "react-router-dom"

import { Login } from "./pages/Login/Login"
import { NoPage } from "./pages/NoPage/NoPage"
import { Signup } from "./pages/Signup/Signup"
import { Home } from "./pages/Home/Home"
import { Logout } from "./pages/Logout/Logout"
import { Locations } from "./pages/Locations/Locations"

import { LoggedOutLayout } from "./layouts/LoggedOutLayout"
import { useState } from "react"
import { OverlayContext } from "./components/Context/Context"
import { Overlay } from "./components/Overlay/Overlay"

function App() {
  const [overlay, setOverlay] = useState(false)

  return (
    <OverlayContext.Provider value={setOverlay}>
      {overlay ? <Overlay /> : null}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedOutLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/app" element={<></>}>
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/logout" element={<Logout />} />
            <Route path="/app/locations" element={<Locations />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </OverlayContext.Provider>
  )
}

export default App
