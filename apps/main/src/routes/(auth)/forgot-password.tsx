import { createFileRoute } from "@tanstack/react-router";

import { ForgotPasswordForm } from "@/features/auth/components/forms/forgot-password";

export const Route = createFileRoute("/(auth)/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-6 md:p-10">
      <ForgotPasswordForm />
    </div>
  );
}
