import type { ComponentProps } from "react";

import { cn } from "@bizware/ui/lib/utils";

import type { Website } from "@/lib/mock-db";

interface WebsiteListItemProps extends ComponentProps<"div"> {
  website: Website;
}

export function WebsiteListItem({
  className,
  website,
  ...props
}: WebsiteListItemProps) {
  return (
    <div className={cn("flex w-full items-center p-4", className)} {...props}>
      <div className="aspect-video h-full bg-black/35" />
      <div className="flex flex-1 flex-col gap-1">
        <h1 className="text-lg font-semibold">{website.name}</h1>
        <p className="text-sm text-muted-foreground">{website.domain}</p>
      </div>
    </div>
  );
}
