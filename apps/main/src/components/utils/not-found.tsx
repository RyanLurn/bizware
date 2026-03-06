export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <p className="text-xl font-semibold text-destructive">Lỗi 404</p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Trang không tồn tại
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu. Nó có thể đã
          bị di chuyển hoặc không tồn tại.
        </p>
      </div>
    </div>
  );
}
