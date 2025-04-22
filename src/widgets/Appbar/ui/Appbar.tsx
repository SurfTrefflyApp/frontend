import { useUnit } from "effector-react";
import { Link, useLocation } from "react-router";

import { $isAuth } from "@/shared/auth";
import { Title } from "@/shared/icons/Title";
import { routes } from "@/shared/router";

export const Appbar = () => {
  const isAuth = useUnit($isAuth);
  const location = useLocation();

  const linkClass = (path: string) =>
    `outline-none focus:outline-none text-xl font-medium hover:text-primary hover:border-b-2 hover:border-primary ${
      location.pathname === path
        ? "text-primary border-b-2 border-primary font-semibold"
        : ""
    }`;

  return (
    <header className="flex justify-between items-center py-4 px-20 mb-4">
      <Title />
      <nav className="flex items-center gap-10">
        <Link to={routes.main} className={linkClass(routes.main)}>
          Главная
        </Link>
        <Link
          to={routes.eventsSearch}
          className={linkClass(routes.eventsSearch)}
        >
          Карта
        </Link>
        {isAuth && (
          <Link to={routes.events} className={linkClass(routes.events)}>
            Мероприятия
          </Link>
        )}
        <Link to={routes.profile} className={linkClass(routes.profile)}>
          Профиль
        </Link>
      </nav>
    </header>
  );
};
