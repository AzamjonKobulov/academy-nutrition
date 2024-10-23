import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LangsProvider from "./contexts/LangsContexts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangsProvider>
      <App />
    </LangsProvider>
  </StrictMode>
);
