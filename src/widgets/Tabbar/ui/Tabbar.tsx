import { Exit } from "@/features/Exit";
import { useUnit } from "effector-react";
import { Link, useLocation } from "react-router";

import { $isAuth } from "@/shared/auth";
import { $isAdmin } from "@/shared/auth/model";
import { Calendar } from "@/shared/icons/Calendar";
import { Group } from "@/shared/icons/Group";
import { Home } from "@/shared/icons/Home";
import { Map } from "@/shared/icons/Map";
import { Profile } from "@/shared/icons/Profile";
import { isRunningAsPWA } from "@/shared/lib/isRunningAsPWA";
import { cn } from "@/shared/lib/utils";
import { routes } from "@/shared/router";

export const Tabbar = () => {
  const isAuth = useUnit($isAuth);
  const isAdmin = useUnit($isAdmin);
  const location = useLocation();

  const isPWA = isRunningAsPWA();

  const linkClass = (path: string) =>
    `relative flex items-center justify-center w-[56px] h-[56px] rounded-full
    transition-all duration-300 outline-none focus:outline-none
    active:rounded-full active:bg-[#c6e9ca]/30 active:shadow-[0_0_10px_#c6e9ca]
    active:[&>svg]:text-primary-container ${
      location.pathname === path
        ? "rounded-full bg-[#c6e9ca]/30 shadow-[0_0_10px_#c6e9ca]"
        : ""
    }`;

  const iconClass = (path: string) =>
    cn("text-primary w-[36px] h-[36px] fill-white", {
      "text-primary-container": path === location.pathname,
    });

  return (
    <nav
      className={cn(
        "sticky bottom-0 w-full p-2 bg-[#F4F4F0] rounded-t-xl flex items-center justify-evenly shadow-3xl z-10 touch-none select-none",
        { "pb-6": isPWA },
      )}
    >
      {isAdmin ? (
        <>
          <Link
            to={routes.adminEvents}
            className={linkClass(routes.adminEvents)}
          >
            <Calendar className={iconClass(routes.adminEvents)} />
          </Link>
          <Link to={routes.adminUsers} className={linkClass(routes.adminUsers)}>
            <Group className={iconClass(routes.adminUsers)} />
          </Link>
          <Exit iconClassName="w-[30px] h-[30px]" withConfirm />
        </>
      ) : (
        <>
          <Link to={routes.main} className={linkClass(routes.main)}>
            <Home className={iconClass(routes.main)} />
          </Link>
          <Link
            to={routes.eventsSearch}
            className={linkClass(routes.eventsSearch)}
          >
            <Map className={iconClass(routes.eventsSearch)} />
          </Link>
          {isAuth && (
            <Link to={routes.events} className={linkClass(routes.events)}>
              <Calendar className={iconClass(routes.events)} />
            </Link>
          )}
          <Link to={routes.profile} className={linkClass(routes.profile)}>
            <Profile className={iconClass(routes.profile)} />
          </Link>
        </>
      )}
    </nav>
  );
};
