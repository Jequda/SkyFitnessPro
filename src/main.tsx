import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { EmailProvider } from "./contexts/EmailContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <EmailProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </EmailProvider>
  </BrowserRouter>
)
