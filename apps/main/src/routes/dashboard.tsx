import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import { getUser } from "@/features/auth/utils/get-user";

export const Route = createFileRoute("/dashboard")({
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
  component: Dashboard,
});

function Dashboard() {
  const { user } = Route.useRouteContext();

  return <div>Chào mừng, {user.name}!</div>;
}
