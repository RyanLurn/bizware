import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return <div>Hello "/_app"!</div>;
}
