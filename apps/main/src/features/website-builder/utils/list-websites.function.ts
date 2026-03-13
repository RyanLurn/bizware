import { createServerFn } from "@tanstack/react-start";

import { mockDb } from "@/lib/mock-db";

export const listWebsites = createServerFn().handler(() => {
  return mockDb.websites;
});
