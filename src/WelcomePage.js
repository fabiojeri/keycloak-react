// src/WelcomePage.js
import React, { useState } from "react";

function WelcomePage({ token, onLogout }) {
  const [response, setResponse] = useState(null);

  const handleRequest = async () => {
    const response = await fetch(
      "http://localhost:8080/realms/URP/protocol/openid-connect/token",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: "fabio",
          password: "1234",
          grant_type: "password",
          client_id: "armaPersonal_URP",
        }),
      }
    );

    const data = await response.json();
    setResponse(data);
  };

  return (
    <div style={styles.container}>
      <h1>Bienvenido, Usuario</h1>
      <button onClick={handleRequest} style={styles.button}>
        Enviar petición
      </button>
      <button onClick={onLogout} style={styles.logoutButton}>
        Cerrar sesión
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
const styles = {
  container: {
    padding: "20px",
  },
  button: {
    padding: "10px",
    marginRight: "10px",
    backgroundColor: "#28a745",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "10px",
    backgroundColor: "#dc3545",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
export default WelcomePage;
