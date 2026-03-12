import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/websites")({
  component: Websites,
});

function Websites() {
  return <div>Hello "/_app/websites"!</div>;
}
