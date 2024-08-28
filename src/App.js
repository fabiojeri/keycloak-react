// src/App.js
import React, { useState } from "react";
import Login from "./Login";
import WelcomePage from "./WelcomePage";
import keycloak from "./keycloak";

function App() {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <WelcomePage token={token} onLogout={handleLogout} />
    </div>
  );
}

export default App;
