export function InvalidTokenMessage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Liên kết xác thực không hợp lệ</h1>
      <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
        <p>Liên kết xác thực không hợp lệ hoặc đã hết hạn.</p>
        <p>Vui lòng kiểm tra lại email hoặc yêu cầu liên kết mới.</p>
      </div>
    </>
  );
}
