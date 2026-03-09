import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/welcome")({
  component: Welcome,
});

function Welcome() {
  return <div>Hello "/welcome"!</div>;
}
