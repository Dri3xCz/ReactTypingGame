import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext)
    throw Error("useTheme hook must be used inside of ThemeProvider.");

  return themeContext;
}