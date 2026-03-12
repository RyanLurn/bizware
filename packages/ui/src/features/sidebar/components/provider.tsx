import type { ComponentProps, CSSProperties } from "react";

import { useCallback, useEffect, useState, useMemo } from "react";

import type { SidebarContextProps } from "@/features/sidebar/context";

import {
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_WIDTH,
} from "@/features/sidebar/constants";
import { SidebarContext } from "@/features/sidebar/context";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function SidebarProvider({
  onOpenChange: setOpenProp,
  defaultOpen = true,
  open: openProp,
  className,
  children,
  style,
  ...props
}: {
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  open?: boolean;
} & ComponentProps<"div">) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: ((value: boolean) => boolean) | boolean) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      setOpenMobile,
      toggleSidebar,
      openMobile,
      isMobile,
      setOpen,
      state,
      open,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        style={
          {
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            "--sidebar-width": SIDEBAR_WIDTH,
            ...style,
          } as CSSProperties
        }
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          className
        )}
        data-slot="sidebar-wrapper"
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
