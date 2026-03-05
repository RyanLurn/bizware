import { UserThemeSchema } from "@/theme/schemas";

export const THEME_STORAGE_KEY = "ui-theme";

export function getStoredTheme() {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const theme = UserThemeSchema.parse(storedTheme);
    return theme;
  } catch {
    return "system";
  }
}
