/* eslint-disable perfectionist/sort-objects */

import type { Branded } from "@bizware/common/types/brand";

import { boolean, pgTable, text } from "drizzle-orm/pg-core";

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
