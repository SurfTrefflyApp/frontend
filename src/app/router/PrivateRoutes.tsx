import { useUnit } from "effector-react";
import { Navigate, Outlet } from "react-router";

import { $isAuth } from "@/shared/auth";

interface PrivateRoutes {
  forAuth?: boolean;
  navigateHref?: string;
}

export const PrivateRoutes = ({
  forAuth = false,
  navigateHref = "/",
}: PrivateRoutes) => {
  const isAuth = useUnit($isAuth);
  return (forAuth && isAuth) || (!forAuth && !isAuth) ? (
    <Outlet />
  ) : (
    <Navigate to={navigateHref} replace />
  );
};
