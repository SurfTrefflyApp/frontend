import { Tag as TagModel } from "@/entities/tag";
import { User } from "@/entities/user";
import { useUnit } from "effector-react";
import { Link } from "react-router";

import { ProfileHeader } from "@/pages/Profile/ui/ProfileHeader";

import { $isAuth } from "@/shared/auth";
import { Edit } from "@/shared/icons/Edit";
import { Plus } from "@/shared/icons/Plus";
import { useFetch } from "@/shared/lib/useFetch";
import { routes } from "@/shared/router";
import { Tag } from "@/shared/ui/Tag";
import { Button } from "@/shared/ui/button";

const tags: TagModel[] = [
  { id: 1, name: "Музыка" },
  { id: 2, name: "Кино" },
  { id: 3, name: "Наука и технологии" },
  { id: 4, name: "Спорт" },
  { id: 5, name: "Юмор" },
];

export const Profile = () => {
  const isAuth = useUnit($isAuth);

  const { data: user } = useFetch<User>("/users/me", true);

  return (
    <main className="mx-auth flex flex-col h-full">
      <ProfileHeader isAuth={isAuth} user={user} />
      <div className="flex-1 flex flex-col justify-center gap-6 p-6">
        {isAuth ? (
          <div className="flex flex-col gap-8">
            <UserTags tags={tags} />
            <UserEvents />
          </div>
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

const UserTags = ({ tags }: { tags: TagModel[] }) => {
  return (
    <div className="bg-surface-container-low rounded-3xl p-4 drop-shadow-lg">
      <div className="relative mb-4">
        <h3 className="text-center text-base font-semibold">Мои интересы</h3>
        <Button
          className="absolute top-1 right-0 p-0! h-[22px]"
          variant="ghost"
        >
          <Edit className="size-[22px]" />
        </Button>
      </div>
      <div className="text-center flex justify-center items-center flex-wrap gap-2 gap-x-6">
        {tags.length ? (
          tags.map(({ id, name }) => <Tag key={id} name={name} />)
        ) : (
          <p>Теги пока не выбраны</p>
        )}
      </div>
    </div>
  );
};

const UserEvents = () => {
  return (
    <div className="bg-surface-container-low rounded-3xl p-4 drop-shadow-lg">
      <div className="relative mb-4">
        <h3 className="text-center text-base font-semibold">Мои события</h3>
        <Button
          className="absolute top-1 right-0 p-0! h-[22px]"
          variant="ghost"
        >
          <Plus />
        </Button>
      </div>
      <div className="text-center">Пока не нашлось Ваших мероприятий</div>
    </div>
  );
};
