import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarMenu({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      data-slot="sidebar-menu"
      data-sidebar="menu"
      {...props}
    />
  );
}
