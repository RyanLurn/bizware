import type { ComponentProps } from "react";

import { cn } from "@bizware/ui/lib/utils";

import type { Website } from "@/lib/mock-db";

import { WebsiteListItem } from "@/features/website-builder/components/list/item";

interface WebsiteListProps extends ComponentProps<"div"> {
  websites: Website[];
}

export function WebsiteList({
  className,
  websites,
  ...props
}: WebsiteListProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {websites.map((website) => (
        <WebsiteListItem website={website} key={website.id} />
      ))}
    </div>
  );
}
