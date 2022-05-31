import { useState } from "react";
import { ThemeContext, themes } from "./theme-context";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.red);

  function changeTheme(selected) {
    setTheme(selected);
    document.documentElement.style.setProperty(
      "--main-color",
      "var(--" + selected.name + ")"
    );
    document.documentElement.style.setProperty(
      "--main-color-rgb",
      "var(--" + selected.name + "-rgb)"
    );
    document.documentElement.style.setProperty(
      "--main-color-text",
      "var(--" + selected.name + "--color)"
    );
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
