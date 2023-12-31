import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLogged && <Login />}
        {ctx.isLogged && <Home />}
      </main>
    </>
  );
}

export default App;
