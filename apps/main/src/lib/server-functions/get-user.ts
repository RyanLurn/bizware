import { getRequestHeaders } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";

import { auth } from "@/features/auth";

export const getUser = createServerFn().handler(async () => {
  console.log("getUser is called!");

  const getSessionResult = await auth.api.getSession({
    // Inferred as any by typescript-eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: getRequestHeaders(),
  });

  if (!getSessionResult) {
    throw redirect({ to: "/sign-in" });
  }

  const { user } = getSessionResult;
  return user;
});
