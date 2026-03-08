import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/verify-email")({
  component: VerifyEmail,
});

function VerifyEmail() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4 p-6 md:p-10">
      <h1 className="text-3xl font-bold">Vui lòng xác thực email</h1>
      <p className="text-muted-foreground">
        Chúng tôi đã gửi một email xác thực đến địa chỉ email của bạn.
      </p>
      <p className="text-muted-foreground">
        Vui lòng kiểm tra hộp thư và nhấp vào liên kết xác thực để hoàn tất quá
        trình đăng ký.
      </p>
    </div>
  );
}
