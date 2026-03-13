import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarMenuSubItem({
  className,
  ...props
}: ComponentProps<"li">) {
  return (
    <li
      className={cn("group/menu-sub-item relative", className)}
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      {...props}
    />
  );
}
