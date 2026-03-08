import { createFileRoute } from "@tanstack/react-router";

import { SignInForm } from "@/features/auth/components/forms/sign-in";

export const Route = createFileRoute("/(auth)/sign-in")({
  component: SignIn,
});

function SignIn() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-6 md:p-10">
      <SignInForm />
    </div>
  );
}
