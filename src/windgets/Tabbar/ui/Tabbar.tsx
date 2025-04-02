import { Link } from "react-router";

import { Home } from "@/shared/icons/Home";
import { routes } from "@/shared/router";

export const Tabbar = () => {
  return (
    <nav className="w-full py-4 px-10 bg-[#F4F4F0] rounded-t-xl flex justify-between">
      <Link to={routes.main}>
        <Home />
      </Link>
      <Link to={routes.profile}>
        <p>Profile</p>
      </Link>
    </nav>
  );
};
