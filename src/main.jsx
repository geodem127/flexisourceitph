import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./components/auth";

import ThemeProvider from "./components/theme";
import "./index.css";

import RouteGuard from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <RouteGuard />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
