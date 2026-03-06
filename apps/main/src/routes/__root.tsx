/// <reference types="vite/client" />

import type { ReactNode } from "react";

import {
  createRootRoute,
  HeadContent,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider, themeScript, ModeToggle } from "@bizware/ui/theme";
import { Toaster } from "@bizware/ui";

import styles from "@/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "Bizware",
      },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { type: "image/svg+xml", href: "/favicon.svg", rel: "icon" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce children={themeScript} />
        <ThemeProvider>
          <Toaster position="top-center" closeButton richColors />
          {children}
          <ModeToggle className="fixed top-3 right-3 z-50" />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
