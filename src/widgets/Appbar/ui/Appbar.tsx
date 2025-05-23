import { Exit } from "@/features/Exit";
import { useUnit } from "effector-react";
import { Link, useLocation } from "react-router";

import { $isAuth } from "@/shared/auth";
import { $isAdmin } from "@/shared/auth/model";
import { Title } from "@/shared/icons/Title";
import { routes } from "@/shared/router";

export const Appbar = () => {
  const isAuth = useUnit($isAuth);
  const isAdmin = useUnit($isAdmin);
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-xl font-medium hover:text-primary hover:border-b-2 hover:border-primary ${
      location.pathname === path
        ? "text-primary border-b-2 border-primary font-semibold"
        : ""
    }`;

  return (
    <header className="flex justify-between items-center py-4 px-20 top-0 sticky h-appbar-height z-50 bg-background">
      <Title />
      <nav className="flex items-center gap-10">
        {isAdmin ? (
          <>
            <Link to={routes.adminEvents} className={linkClass(routes.main)}>
              Мероприятия
            </Link>
            <Link to={routes.adminUsers} className={linkClass(routes.main)}>
              Пользователи
            </Link>
            <Exit withConfirm />
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};
