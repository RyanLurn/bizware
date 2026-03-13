import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { z } from "zod";

import { getUser } from "@/features/auth/utils/get-user";

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
  return (
    <div className="h-dvh w-dvw">
      <Outlet />
    </div>
  );
}
