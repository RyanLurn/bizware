import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SidebarGroupContent({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full text-sm", className)}
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      {...props}
    />
  );
}
