import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password";

export const Route = createFileRoute("/(auth)/reset-password")({
  beforeLoad: ({ search }) => {
    if ("error" in search) {
      throw redirect({ to: "/invalid-token" });
    }

    return { token: search.token };
  },
  validateSearch: z.union([
    z.object({ token: z.string().min(1) }),
    z.object({ error: z.string().min(1) }),
  ]),
  component: ResetPassword,
});

function ResetPassword() {
  const { token } = Route.useRouteContext();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-6 p-6 md:p-10">
      <ResetPasswordForm token={token} />
    </div>
  );
}
