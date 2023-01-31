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
import { LoadingScreenContext } from "./components/misc/context";
import { LoadingScreen } from "./components/misc/Loaders";
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
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingScreenContext.Provider>
  )
}

export default App
