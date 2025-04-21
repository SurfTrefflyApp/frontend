import { Appbar } from "@/widgets/Appbar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

import { mdBreakpoint } from "@/shared/consts/breakpoints";

export const AppbarLayout = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${mdBreakpoint}px)` });

  return (
    <>
      {isDesktop && <Appbar />}
      <Outlet />
    </>
  );
};
