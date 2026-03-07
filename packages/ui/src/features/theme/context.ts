import { createContext } from "react";

import type { UserTheme, AppTheme } from "@/features/theme/schemas";

type ThemeContextProps = {
  setTheme: (theme: UserTheme) => void;
  userTheme: UserTheme;
  appTheme: AppTheme;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
