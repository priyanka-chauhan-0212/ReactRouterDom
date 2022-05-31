import { useContext } from "react";
import { ThemeContext, themes } from "./theme-context";

export default function Themebutton() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="ThemeButton">
      <div
        className={`theme-button red ${
          themeContext.theme.name === "red" ? "active" : ""
        }`}
        onClick={() => themeContext.changeTheme(themes.red)}
      ></div>
      <div
        className={`theme-button blue ${
          themeContext.theme.name === "blue" ? "active" : ""
        }`}
        onClick={() => themeContext.changeTheme(themes.blue)}
      ></div>
      <div
        className={`theme-button yellow ${
          themeContext.theme.name === "yellow" ? "active" : ""
        }`}
        onClick={() => themeContext.changeTheme(themes.yellow)}
      ></div>
      <div
        className={`theme-button purple ${
          themeContext.theme.name === "purple" ? "active" : ""
        }`}
        onClick={() => themeContext.changeTheme(themes.purple)}
      ></div>
    </div>
  );
}
