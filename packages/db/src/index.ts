import { drizzle } from "drizzle-orm/neon-http";
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

import {
  verificationTable,
  sessionTable,
  accountTable,
  userTable,
} from "@/schema/tables/auth";

const env = createEnv({
  server: {
    NEON_POOLED_CONNECTION_STRING: z.url(),
  },
  runtimeEnv: process.env,
});

export const db = drizzle(env.NEON_POOLED_CONNECTION_STRING, {
  schema: { verificationTable, sessionTable, accountTable, userTable },
});

export { verificationTable, sessionTable, accountTable, userTable };
