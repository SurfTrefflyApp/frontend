import { Appbar } from "@/widgets/Appbar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

export const AppbarLayout = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` });

  return (
    <>
      {isDesktop && <Appbar />}
      <Outlet />
    </>
  );
};
