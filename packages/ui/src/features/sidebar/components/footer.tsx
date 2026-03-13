import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2 p-2", className)}
      data-slot="sidebar-footer"
      data-sidebar="footer"
      {...props}
    />
  );
}
