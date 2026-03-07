import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@bizware/ui/components/button";
import { toast } from "@bizware/ui/components/toaster";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-y-2">
      <h1 className="text-2xl font-bold">Bizware</h1>
      <Button onClick={() => toast.success("Yippee!")}>Nhấn</Button>
    </div>
  );
}
