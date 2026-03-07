import { createServerFn } from "@tanstack/react-start";

import { authMiddleware } from "@/lib/middleware/auth";

export const getUser = createServerFn()
  .middleware([authMiddleware])
  .handler(({ context }) => {
    const { user } = context;
    return user;
  });
