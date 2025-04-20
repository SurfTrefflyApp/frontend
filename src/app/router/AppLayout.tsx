import { Tabbar } from "@/widgets/Tabbar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

export const AppLayout = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` });

  return (
    <>
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <Outlet />
      </div>
      {!isDesktop && <Tabbar />}
    </>
  );
};
