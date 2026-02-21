import { useContext } from "react";
import { ThemeContext } from "./theme.contex";

export function useTheme() {
  return useContext(ThemeContext);
}
