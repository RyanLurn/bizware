import type { ComponentProps } from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

export function SidebarGroupLabel({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div"> & ComponentProps<"div">) {
  return useRender({
    props: mergeProps<"div">(
      {
        className: cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    state: {
      slot: "sidebar-group-label",
      sidebar: "group-label",
    },
    defaultTagName: "div",
    render,
  });
}
