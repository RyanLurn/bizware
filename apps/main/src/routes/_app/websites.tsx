import { createFileRoute } from "@tanstack/react-router";

import { listWebsites } from "@/features/website-builder/utils/list-websites";
import { WebsiteList } from "@/features/website-builder/components/list";

export const Route = createFileRoute("/_app/websites")({
  loader: async () => {
    return await listWebsites();
  },
  component: Websites,
});

function Websites() {
  const websites = Route.useLoaderData();
  return <WebsiteList websites={websites} />;
}
