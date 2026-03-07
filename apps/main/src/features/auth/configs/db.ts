import type { BetterAuthOptions } from "better-auth";

import {
  verificationTable,
  accountTable,
  sessionTable,
  userTable,
} from "@bizware/db/schema/tables/auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@bizware/db";

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
