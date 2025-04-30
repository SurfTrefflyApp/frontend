import type { User } from "@/entities/User";
import { Exit } from "@/widgets/Exit";
import { useUnit } from "effector-react";
import { useState } from "react";
import { Link } from "react-router";

import { $user, setUserEvent } from "@/pages/Profile/model/user";
import { ProfileEvents } from "@/pages/Profile/ui/ProfileEvents";
import { ProfileHeader } from "@/pages/Profile/ui/ProfileHeader";
import { ProfileTags } from "@/pages/Profile/ui/ProfileTags";

import { $isAuth } from "@/shared/auth";
import { useFetch } from "@/shared/lib/useFetch";
import { routes } from "@/shared/router";
import { Button } from "@/shared/ui/button";

import { ProfileEditWidget } from "./ProfileEditWidget";
import { ProfileSkeleton } from "./ProfileSkeleton";

export const Profile = () => {
  const [editOpen, setEditOpen] = useState(false);

  const isAuth = useUnit($isAuth);
  const user = useUnit($user);
  const setUser = useUnit(setUserEvent);

  const { loading } = useFetch<User>("/users/me", isAuth, setUser);

  if (loading) {
    return <ProfileSkeleton />;
  }

  return (
    <>
      <div className="w-full justify-end pr-20 hidden md:flex">
        <div className="flex gap-14 items-center">
          <ProfileEditWidget isAuth={isAuth} setEditOpen={setEditOpen} />
          <Exit />
        </div>
      </div>
      <main className="mx-auto flex flex-col gap-4 h-full max-w-4xl">
        <div className="w-full flex flex-col md:flex-row gap-8 md:justify-center md:items-center relative">
          <ProfileHeader
            isAuth={isAuth}
            user={user}
            editOpen={editOpen}
            setEditOpen={setEditOpen}
          />
          {isAuth && <ProfileTags tags={user?.tags ?? []} />}
        </div>
        {isAuth ? (
          <ProfileEvents />
        ) : (
          <div className="flex flex-col gap-4 mb-4">
            <p className="text-center text-xl font-medium">
              Войди в аккаунт или зарегистрируйся, чтобы участвовать в
              мероприятиях, получать персональные рекомендации и напоминания о
              предстоящих мероприятиях
            </p>
            <Button variant="secondary" asChild className="w-fit mx-auto">
              <Link to={routes.welcome}>Авторизоваться</Link>
            </Button>
          </div>
        )}
      </main>
    </>
  );
};
