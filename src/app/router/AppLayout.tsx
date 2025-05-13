import { Tabbar } from "@/widgets/Tabbar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

import { mdBreakpoint } from "@/shared/consts/breakpoints";

export const AppLayout = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${mdBreakpoint}px)` });

  return (
    <>
      <Outlet />
      {!isDesktop && <Tabbar />}
    </>
  );
};
