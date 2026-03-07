import { createMiddleware } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";

import { auth } from "@/features/auth";

export const authMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const getSessionResult = await auth.api.getSession({
      headers: request.headers,
    });
    if (!getSessionResult) {
      throw redirect({ to: "/sign-in" });
    }
    const { session, user } = getSessionResult;

    return await next({
      context: {
        session,
        user,
      },
    });
  }
);
