import { Tabbar } from "@/windgets/Tabbar";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      <div className="flex-1">
        <Outlet />
      </div>
      <Tabbar />
    </>
  );
};
