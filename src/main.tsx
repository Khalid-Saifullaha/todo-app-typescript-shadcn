import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import router from "./routes/index";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
  </StrictMode>
);
