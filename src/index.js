import React from "react";
import ReactDOM from "react-dom/client";
import "./Componentes/GlobalStyles/reset.css"
import AppRoutes from "routes";
import { GlobalStyles } from 'Componentes/GlobalStyles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <AppRoutes />
    </GlobalStyles>
  </React.StrictMode>
);
