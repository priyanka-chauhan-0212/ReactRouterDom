import React from "react";

export const themes = {
  red: {
    name: "red",
    cssVar: "var(--red)"
  },
  blue: {
    name: "blue",
    cssVar: "var(--blue)"
  },
  yellow: {
    name: "yellow",
    cssVar: "var(--gold)"
  },
  purple: {
    name: "purple",
    cssVar: "var(--purple)"
  }
};

export const ThemeContext = React.createContext(themes.red);
