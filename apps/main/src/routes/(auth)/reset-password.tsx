import { createFileRoute } from "@tanstack/react-router";

import { InvalidTokenMessage } from "@/features/auth/components/invalid-token-message";
import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password";
import { VerificationRouteSearchParamsSchema } from "@/features/auth/validators";

export const Route = createFileRoute("/(auth)/reset-password")({
  validateSearch: VerificationRouteSearchParamsSchema,
  component: ResetPassword,
});

function ResetPassword() {
  const searchParams = Route.useSearch();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-6 p-6 md:p-10">
      {"token" in searchParams ? (
        <ResetPasswordForm token={searchParams.token} />
      ) : (
        <InvalidTokenMessage />
      )}
    </div>
  );
}
