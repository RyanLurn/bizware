import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/verify-email")({
  component: VerifyEmail,
});

function VerifyEmail() {
  return <div>Hello "/(auth)/verify-email"!</div>;
}
