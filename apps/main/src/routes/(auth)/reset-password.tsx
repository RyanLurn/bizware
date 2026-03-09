import { createFileRoute, redirect } from "@tanstack/react-router";

import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password";
import { VerificationRouteSearchParamsSchema } from "@/features/auth/validators";

export const Route = createFileRoute("/(auth)/reset-password")({
  beforeLoad: ({ search }) => {
    if ("error" in search) {
      throw redirect({ to: "/invalid-token" });
    }

    return { token: search.token };
  },
  validateSearch: VerificationRouteSearchParamsSchema,
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
