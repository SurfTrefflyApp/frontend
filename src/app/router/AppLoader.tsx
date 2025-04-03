import { useUnit } from "effector-react";
import { Outlet } from "react-router";

import { $animating, Splash } from "@/pages/Splash";

import { checkAuthFx } from "@/shared/auth";

export const AppLoader = () => {
  const isAuthChecking = useUnit(checkAuthFx.pending);
  const isAnimating = useUnit($animating);

  return <Splash />;

  return isAuthChecking || isAnimating ? <Splash /> : <Outlet />;
};
