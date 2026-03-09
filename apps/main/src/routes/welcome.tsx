import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { InvalidTokenMessage } from "@/features/auth/components/invalid-token-message";

export const Route = createFileRoute("/welcome")({
  validateSearch: z.object({
    error: z.string().optional(),
  }),
  component: Welcome,
});

function Welcome() {
  const searchParams = Route.useSearch();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-6 p-6 md:p-10">
      {"error" in searchParams ? (
        <InvalidTokenMessage />
      ) : (
        <>
          <h1 className="text-3xl font-bold">Chào mừng!</h1>
          <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
            <p>Cảm ơn bạn đã đăng ký tài khoản.</p>
          </div>
        </>
      )}
    </div>
  );
}
