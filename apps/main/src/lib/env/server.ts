import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    NEON_POOLED_CONNECTION_STRING: z.url(),
    BETTER_AUTH_SECRET: z.base64(),
    BETTER_AUTH_URL: z.url(),
  },
  runtimeEnv: process.env,
});
