import { createFileRoute } from "@tanstack/react-router";

import { auth } from "@/features/auth";

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        return await auth.handler(request);
      },
      GET: async ({ request }: { request: Request }) => {
        return await auth.handler(request);
      },
    },
  },
});
