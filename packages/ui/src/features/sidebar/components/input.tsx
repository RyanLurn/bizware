import type { ComponentProps } from "react";

import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

export function SidebarInput({
  className,
  ...props
}: ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn("h-8 w-full bg-background shadow-none", className)}
      data-slot="sidebar-input"
      data-sidebar="input"
      {...props}
    />
  );
}
