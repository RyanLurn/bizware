import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarMenuItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      className={cn("group/menu-item relative", className)}
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      {...props}
    />
  );
}
