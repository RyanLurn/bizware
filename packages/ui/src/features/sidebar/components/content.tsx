import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "no-scrollbar flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      data-slot="sidebar-content"
      data-sidebar="content"
      {...props}
    />
  );
}
