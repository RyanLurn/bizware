import type { ComponentProps } from "react";

import { Separator } from "@/components/separator";
import { cn } from "@/lib/utils";

export function SidebarSeparator({
  className,
  ...props
}: ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      data-slot="sidebar-separator"
      data-sidebar="separator"
      {...props}
    />
  );
}
