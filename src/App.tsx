import { useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import { Login } from './pages/Login';
import { NoPage } from './pages/NoPage';
import { LoggedOutLayout } from './layouts/LoggedOutLayout';
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { LoggedInLayout } from './layouts/LoggedInLayout';
import { LoadingScreenContext } from "./components/context/context";
import { LoadingScreen } from "./components/loading/Loaders";
import { Logout } from "./pages/Logout";

function App() {

  const [loadingScreen, setLoadingScreen] = useState(false)


  return (
    <LoadingScreenContext.Provider value={setLoadingScreen}>
      {loadingScreen ? (<LoadingScreen/>) : (null)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedOutLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
          <Route path="/app" element={<LoggedInLayout />}>
            <Route path="/app/home" element={<Home />} />
            <Route path="/app/logout" element={<Logout />} />
            <Route path="*" element={<NoPage/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingScreenContext.Provider>
  )
}

export default App
