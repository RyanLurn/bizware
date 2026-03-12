import { createContext } from "react";

export type SidebarContextProps = {
  setOpenMobile: (open: boolean) => void;
  setOpen: (open: boolean) => void;
  state: "collapsed" | "expanded";
  toggleSidebar: () => void;
  openMobile: boolean;
  isMobile: boolean;
  open: boolean;
};

export const SidebarContext = createContext<SidebarContextProps | null>(null);
