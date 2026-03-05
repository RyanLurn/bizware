import { use } from "react";

import { ThemeContext } from "@/theme/context";

export function useTheme() {
  const themeContext = use(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeContext;
}
