import { useUnit } from "effector-react";
import { Navigate, Outlet } from "react-router";

import { $isAdmin } from "@/shared/auth/model";

interface AdminRoutes {
  forAdmin?: boolean;
  navigateHref?: string;
}

export const AdminRoutes = ({
  forAdmin = true,
  navigateHref = "/",
}: AdminRoutes) => {
  const isAdmin = useUnit($isAdmin);

  return (forAdmin && isAdmin) || (!forAdmin && !isAdmin) ? (
    <Outlet />
  ) : (
    <Navigate to={navigateHref} replace />
  );
};
