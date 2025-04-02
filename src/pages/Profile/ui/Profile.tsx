import { useUnit } from "effector-react";
import { Link } from "react-router";

import { $isAuth, logoutEvent as logout } from "@/shared/auth";
import { DefaultUser } from "@/shared/icons/DefaultUser";
import { Edit } from "@/shared/icons/Edit";
import { Exit } from "@/shared/icons/Exit";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

export const Profile = () => {
  const isAuth = useUnit($isAuth);
  const logoutEvent = useUnit(logout);
  const username = "Name";

  return (
    <main className="mx-auth flex flex-col h-full">
      <div className="p-6 pt-10 bg-secondary-container flex flex-col items-center gap-4 rounded-b-3xl">
        <div className="flex justify-between items-center w-full">
          {isAuth && (
            <Button variant="ghost">
              <Edit className="size-[22px]" />
            </Button>
          )}
          <h1 className="text-3xl text-primary text-center font-semibold w-full">
            Профиль
          </h1>
          {isAuth && (
            <Button variant="ghost" onClick={logoutEvent}>
              <Exit className="size-[20px]" />
            </Button>
          )}
        </div>
        <DefaultUser />
        <h2 className="text-primary text-xl font-medium">
          {isAuth ? username : "Гость"}
        </h2>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-6 p-6">
        {isAuth ? (
          <p>Здесь будут теги и мероприятия</p>
        ) : (
          <>
            <p className="text-center text-xl font-medium">
              Войдите в аккаунт или зарегистрируйтесь, чтобы участвовать в
              событиях, получать персональные рекомендации и напоминания о
              предстоящих мероприятиях
            </p>
            <Button variant="secondary" asChild className="w-fit mx-auto">
              <Link to={routes.welcome}>Авторизоваться</Link>
            </Button>
          </>
        )}
      </div>
    </main>
  );
};
