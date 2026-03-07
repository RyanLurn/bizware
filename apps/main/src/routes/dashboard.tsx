import { createFileRoute } from "@tanstack/react-router";

import { getUser } from "@/lib/server-functions/get-user";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    const user = await getUser();
    return { user };
  },
  component: Dashboard,
});

function Dashboard() {
  const { user } = Route.useRouteContext();

  return <div>Welcome, {user.name}!</div>;
}
