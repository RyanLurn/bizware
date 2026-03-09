import { createFileRoute } from "@tanstack/react-router";

import { ResetPasswordForm } from "@/features/auth/components/forms/reset-password";
import { VerificationRouteSearchParamsSchema } from "@/features/auth/validators";

export const Route = createFileRoute("/(auth)/reset-password")({
  validateSearch: VerificationRouteSearchParamsSchema,
  component: ResetPassword,
});

function ResetPassword() {
  const searchParams = Route.useSearch();

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-y-6 p-6 md:p-10">
      {"token" in searchParams ? (
        <ResetPasswordForm token={searchParams.token} />
      ) : (
        <>
          <h1 className="text-3xl font-bold">Liên kết xác thực không hợp lệ</h1>
          <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
            <p>Liên kết xác thực không hợp lệ hoặc đã hết hạn.</p>
            <p>Vui lòng kiểm tra lại email hoặc yêu cầu liên kết mới.</p>
          </div>
        </>
      )}
    </div>
  );
}
