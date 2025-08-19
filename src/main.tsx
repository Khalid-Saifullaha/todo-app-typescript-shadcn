import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import router from "./routes/index";
import { ThemeProvider } from "./providers/theme-provider";
import store from "./redux/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
