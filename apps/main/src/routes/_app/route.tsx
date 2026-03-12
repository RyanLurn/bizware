import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import { getUser } from "@/lib/server-functions/get-user";

export const Route = createFileRoute("/_app")({
  beforeLoad: async ({ search }) => {
    if ("error" in search) {
      throw redirect({ to: "/invalid-token" });
    }

    const user = await getUser();
    return { user };
  },
  validateSearch: z.object({
    error: z.string().optional(),
  }),
  component: AppLayout,
});

function AppLayout() {
  return <div>Hello "/_app"!</div>;
}
