import { CalendarRange, House, Map, User } from "lucide-react";
import { Link } from "react-router";

import { routes } from "@/shared/router";

export const Tabbar = () => {
  return (
    <nav className="w-full py-4 px-10 bg-[#F4F4F0] rounded-t-xl flex justify-between">
      <Link to={routes.main}>
        <House className="text-primary w-[40px] h-[40px]" />
      </Link>
      <Link to={routes.eventsSearch}>
        <Map className="text-primary w-[40px] h-[40px]" />
      </Link>
      <Link to={routes.events}>
        <CalendarRange className="text-primary w-[40px] h-[40px]" />
      </Link>
      <Link to={routes.profile}>
        <User className="text-primary w-[40px] h-[40px]" />
      </Link>
    </nav>
  );
};
