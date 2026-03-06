import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    precision: 6,
    mode: "date",
  })
    .defaultNow()
    .notNull()
    .$onUpdate(() => /* @__PURE__ */ new Date()),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    precision: 6,
    mode: "date",
  })
    .defaultNow()
    .notNull(),
};
