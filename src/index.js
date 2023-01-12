import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
