// import { useUnit } from "effector-react";
import { Outlet } from "react-router";

// import { $animating, Splash } from "@/pages/Splash";

export const AppLoader = () => {
  // const isAnimating = useUnit($animating);

  // return isAnimating ? <Splash /> : <Outlet />;
  return <Outlet />;
};
