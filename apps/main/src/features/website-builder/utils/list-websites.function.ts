import { createServerFn } from "@tanstack/react-start";

import { getUser } from "@/lib/server-functions/get-user";
import { mockDb } from "@/lib/mock-db";

export const listWebsites = createServerFn().handler(async () => {
  const user = await getUser();
  console.log(`${user.name} is asking for websites.`);

  return mockDb.websites;
});
