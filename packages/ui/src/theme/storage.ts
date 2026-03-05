import type { Failure, Success } from "@bizware/common/types/result";
import type { FallbackError } from "@bizware/error";

import { createFallbackError, BrowserOnlyError } from "@bizware/error";

import type { UserTheme } from "@/theme/schemas";

import { UserThemeSchema } from "@/theme/schemas";

export const THEME_STORAGE_KEY = "ui-theme";

export function setStoredTheme({ theme }: { theme: UserTheme }) {
  if (typeof window === "undefined") {
    const error = new BrowserOnlyError({
      context: { apis: ["localStorage.setItem()"], feature: "setStoredTheme" },
    });

    const failure: Failure<BrowserOnlyError> = { success: false, error };
    return failure;
  }

  try {
    const validTheme = UserThemeSchema.parse(theme);
    localStorage.setItem(THEME_STORAGE_KEY, validTheme);

    const success: Success<undefined> = { data: undefined, success: true };
    return success;
  } catch (error) {
    const fallbackError = createFallbackError(
      "Failed to set theme in local storage",
      {
        cause: error,
      }
    );
    const failure: Failure<FallbackError> = {
      error: fallbackError,
      success: false,
    };
    return failure;
  }
}

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
