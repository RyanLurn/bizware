import type { UserTheme } from "@/features/theme/schemas";

import { UserThemeSchema } from "@/features/theme/schemas";

export function handleThemeChange({ userTheme }: { userTheme: UserTheme }) {
  if (typeof window === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.remove("light", "dark", "system");

  const validTheme = UserThemeSchema.parse(userTheme);
  if (validTheme === "system") {
    const systemTheme = getSystemTheme();
    root.classList.add(systemTheme, "system");
  } else {
    root.classList.add(validTheme);
  }
}

export function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const matchedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  return matchedTheme;
}
