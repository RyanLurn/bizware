import type { ComponentProps, CSSProperties } from "react";

import { useState } from "react";

import { Skeleton } from "@/components/skeleton";
import { cn } from "@/lib/utils";

export function SidebarMenuSkeleton({
  showIcon = false,
  className,
  ...props
}: {
  showIcon?: boolean;
} & ComponentProps<"div">) {
  // Random width between 50 to 90%.
  const [width] = useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  });

  return (
    <div
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          data-sidebar="menu-skeleton-icon"
          className="size-4 rounded-md"
        />
      )}
      <Skeleton
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
      />
    </div>
  );
}
