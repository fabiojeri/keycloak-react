// src/keycloak.js
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://172.17.32.97:8080",
  realm: "URP",
  clientId: "armaPersonal_URP",
});

export default keycloak;
