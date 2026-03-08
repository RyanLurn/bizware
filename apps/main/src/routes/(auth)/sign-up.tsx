import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "@/features/auth/components/forms/sign-up";

export const Route = createFileRoute("/(auth)/sign-up")({
  component: SignUp,
});

function SignUp() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <SignUpForm />
    </div>
  );
}
