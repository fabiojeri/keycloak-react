// import useGettRequest from "./hooks/useGetRequest";

//   const [getPrueba] = useGettRequest(
//     keycloak,
//     `${"http://172.17.32.97:8000/api/protected/"}`,
//     setPrueba,
//     {}
//   );

// src/Login.js
import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://172.17.32.97:8080/realms/URP/protocol/openid-connect/token",
        new URLSearchParams({
          username,
          password,
          grant_type: "password",
          client_id: "armaPersonal_URP",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = response.data.access_token;
      onLogin(token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#333333",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    display: "block",
    color: "#666666",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #dddddd",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
export default Login;
