import { useEffect } from 'react'
import { useState } from 'react'
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { useOutletContext } from "react-router-dom"


import { getUser } from './lib/requests/getUser'

import { Login } from './pages/Login';
import { NoPage } from './pages/NoPage';
import { MainLayout } from './layouts/MainLayout';
import { Signup } from './pages/Signup'



function App() {


  const [user, setUser] = useState(null);
  useEffect(() => {getUser(setUser)}, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout user={user} />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login user={user} />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
