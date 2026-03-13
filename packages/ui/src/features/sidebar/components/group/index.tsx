import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      data-slot="sidebar-group"
      data-sidebar="group"
      {...props}
    />
  );
}
