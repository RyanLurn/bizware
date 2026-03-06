/* eslint-disable perfectionist/sort-objects */

import type { Branded } from "@bizware/common/types/brand";

import {
  timestamp,
  boolean,
  pgTable,
  index,
  text,
  uuid,
} from "drizzle-orm/pg-core";

import { timestamps } from "@/schema/helpers/timestamps";
import { id } from "@/schema/helpers/id";

export type UserId = Branded<string, "UserId">;

export const userTable = pgTable("users", {
  id: id.$type<UserId>(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  ...timestamps,
});

export const userId = uuid("user_id")
  .notNull()
  .references(() => userTable.id, { onDelete: "cascade" });

export const sessionTable = pgTable(
  "sessions",
  {
    id,
    userId,
    token: text("token").notNull().unique(),
    expiresAt: timestamp("expires_at", {
      withTimezone: true,
      mode: "date",
      precision: 6,
    }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    ...timestamps,
  },
  (table) => [index("sessions_user_id_idx").on(table.userId)]
);

export const accountTable = pgTable(
  "accounts",
  {
    id,
    userId,
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      withTimezone: true,
      mode: "date",
      precision: 6,
    }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      withTimezone: true,
      mode: "date",
      precision: 6,
    }),
    scope: text("scope"),
    idToken: text("id_token"),
    password: text("password"),
    ...timestamps,
  },
  (table) => [index("accounts_user_id_idx").on(table.userId)]
);

export const verificationTable = pgTable(
  "verifications",
  {
    id,
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", {
      withTimezone: true,
      mode: "date",
      precision: 6,
    }).notNull(),
    ...timestamps,
  },
  (table) => [index("verifications_identifier_idx").on(table.identifier)]
);
