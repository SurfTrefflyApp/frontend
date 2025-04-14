import { User } from "@/entities/User";
import { useUnit } from "effector-react";
import { Link } from "react-router";

import { $user, setUserEvent } from "@/pages/Profile/model/user";
import { ProfileEvents } from "@/pages/Profile/ui/ProfileEvents";
import { ProfileHeader } from "@/pages/Profile/ui/ProfileHeader";
import { ProfileTags } from "@/pages/Profile/ui/ProfileTags";

import { $isAuth } from "@/shared/auth";
import { useFetch } from "@/shared/lib/useFetch";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

export const Profile = () => {
  const isAuth = useUnit($isAuth);
  const user = useUnit($user);
  const setUser = useUnit(setUserEvent);

  useFetch<User>("/users/me", isAuth, setUser);

  return (
    <main className="mx-auto flex flex-col h-full max-w-2xl">
      <ProfileHeader isAuth={isAuth} user={user} />
      <div className="flex-1 md:justify-start p-6 overflow-y-auto no-scrollbar">
        {isAuth ? (
          <>
            <ProfileTags tags={user?.tags ?? []} />
            <ProfileEvents />
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-center text-xl font-medium">
              Войдите в аккаунт или зарегистрируйтесь, чтобы участвовать в
              событиях, получать персональные рекомендации и напоминания о
              предстоящих мероприятиях
            </p>
            <Button variant="secondary" asChild className="w-fit mx-auto">
              <Link to={routes.welcome}>Авторизоваться</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};
