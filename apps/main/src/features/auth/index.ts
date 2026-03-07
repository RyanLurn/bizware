import { tanstackStartCookies } from "better-auth/tanstack-start";
import { betterAuth } from "better-auth";

import { emailPasswordOptions } from "@/features/auth/configs/email-password";
import { dbOptions } from "@/features/auth/configs/db";
import { serverEnv } from "@/lib/env/server";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
    },
  },
  secret: serverEnv.BETTER_AUTH_SECRET,
  baseURL: serverEnv.BETTER_AUTH_URL,
  ...dbOptions,
  ...emailPasswordOptions,
  plugins: [tanstackStartCookies()], // TanStack Start cookie plugin must come last
});
