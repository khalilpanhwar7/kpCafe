import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
  interface Window {
    __VITE_REACT_LOADED__?: boolean;
  }
}

window.__VITE_REACT_LOADED__ = true;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
