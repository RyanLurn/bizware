import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import { getUser } from "@/lib/server-functions/get-user";

export const Route = createFileRoute("/welcome")({
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
  component: Welcome,
});

function Welcome() {
  const { user } = Route.useRouteContext();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-6 p-6 md:p-10">
      <h1 className="text-3xl font-bold">Chào mừng, {user.name}!</h1>
      <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
        <p>Cảm ơn bạn đã đăng ký tài khoản.</p>
      </div>
    </div>
  );
}
