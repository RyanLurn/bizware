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
    <div
      className={cn("flex h-64 w-full items-center p-4", className)}
      {...props}
    >
      <div className="aspect-video h-full bg-gray-500" />
      <div className="flex flex-1 flex-col gap-1 p-10">
        <h1 className="text-2xl font-semibold">{website.name}</h1>
        <p className="text-lg text-muted-foreground">{website.domain}</p>
      </div>
    </div>
  );
}
