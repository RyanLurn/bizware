import type { ComponentProps } from "react";

import { PanelLeftIcon } from "lucide-react";

import { useSidebar } from "@/components/sidebar";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export function SidebarTrigger({
  className,
  onClick,
  ...props
}: ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      data-slot="sidebar-trigger"
      className={cn(className)}
      data-sidebar="trigger"
      variant="ghost"
      size="icon-sm"
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
