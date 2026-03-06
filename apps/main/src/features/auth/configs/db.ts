import type { BetterAuthOptions } from "better-auth";

import {
  verificationTable,
  accountTable,
  sessionTable,
  userTable,
  db,
} from "@bizware/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const dbOptions: BetterAuthOptions = {
  database: drizzleAdapter(db, {
    schema: {
      verification: verificationTable,
      session: sessionTable,
      account: accountTable,
      user: userTable,
    },
    provider: "pg",
  }),
};
