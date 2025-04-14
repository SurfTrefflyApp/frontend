import { useUnit } from "effector-react";
import { CalendarRange, House, Map, User } from "lucide-react";
import { Link } from "react-router";

import { $isAuth } from "@/shared/auth";
import { routes } from "@/shared/router";

export const Tabbar = () => {
  const isAuth = useUnit($isAuth);

  return (
    <nav className="w-full py-2 px-10 bg-[#F4F4F0] rounded-t-xl flex justify-between shadow-3xl z-10">
      <Link to={routes.main}>
        <House className="text-primary w-[36px] h-[36px]" />
      </Link>
      <Link to={routes.eventsSearch}>
        <Map className="text-primary w-[36px] h-[36px]" />
      </Link>
      {isAuth && (
        <Link to={routes.events}>
          <CalendarRange className="text-primary w-[36px] h-[36px]" />
        </Link>
      )}
      <Link to={routes.profile}>
        <User className="text-primary w-[36px] h-[36px]" />
      </Link>
    </nav>
  );
};
