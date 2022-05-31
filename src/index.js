import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeButton from "./Themebutton";
import ThemeProvider from "./ThemeProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <ThemeButton />
      <App />
    </ThemeProvider>
  </StrictMode>
);
