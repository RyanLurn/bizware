import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";

import { TooltipContent, TooltipTrigger, Tooltip } from "@/components/tooltip";
import { useSidebar } from "@/features/sidebar/hook";
import { cn } from "@/lib/utils";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
  {
    variants: {
      variant: {
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      },
      size: {
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function SidebarMenuButton({
  variant = "default",
  isActive = false,
  size = "default",
  className,
  tooltip,
  render,
  ...props
}: {
  tooltip?: ComponentProps<typeof TooltipContent> | string;
  isActive?: boolean;
} & VariantProps<typeof sidebarMenuButtonVariants> &
  useRender.ComponentProps<"button"> &
  ComponentProps<"button">) {
  const { isMobile, state } = useSidebar();
  const comp = useRender({
    props: mergeProps<"button">(
      {
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      },
      props
    ),
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      active: isActive,
      size,
    },
    render: !tooltip ? render : <TooltipTrigger render={render} />,
    defaultTagName: "button",
  });

  if (!tooltip) {
    return comp;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      {comp}
      <TooltipContent
        hidden={state !== "collapsed" || isMobile}
        align="center"
        side="right"
        {...tooltip}
      />
    </Tooltip>
  );
}
