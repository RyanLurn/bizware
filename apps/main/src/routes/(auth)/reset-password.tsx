import { createFileRoute } from "@tanstack/react-router";

import { VerificationRouteSearchParamsSchema } from "@/features/auth/validators";

export const Route = createFileRoute("/(auth)/reset-password")({
  validateSearch: VerificationRouteSearchParamsSchema,
  component: ResetPassword,
});

function ResetPassword() {
  return <div>Hello "/(auth)/reset-password"!</div>;
}
