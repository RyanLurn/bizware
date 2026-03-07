import type { UserTheme } from "@/features/theme/schemas";

import { UserThemeSchema } from "@/features/theme/schemas";

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

export function setStoredTheme({ theme }: { theme: UserTheme }) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const validTheme = UserThemeSchema.parse(theme);
    localStorage.setItem(THEME_STORAGE_KEY, validTheme);
  } catch {
    return;
  }
}
