import { createFileRoute } from "@tanstack/react-router";

import { WebsiteList } from "@/features/website-builder/components/list";

export const Route = createFileRoute("/_app/websites")({
  component: Websites,
});

function Websites() {
  return <WebsiteList websites={[]} />;
}
