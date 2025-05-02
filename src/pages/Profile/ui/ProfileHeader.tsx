import type { User } from "@/entities/User";
import { Exit } from "@/widgets/Exit";

import { ProfileEdit } from "@/pages/Profile/ui/ProfileEdit";

import { useStatusBarColor } from "@/shared/dom/useStatusBarColor";
import { DefaultUser } from "@/shared/icons/DefaultUser";

import { ProfileEditWidget } from "./ProfileEditWidget";

interface ProfileHeader {
  isAuth: boolean;
  user?: User | null;
  editOpen: boolean;
  setEditOpen: (newEditOpen: boolean) => void;
}

export const ProfileHeader = ({
  isAuth,
  user,
  editOpen,
  setEditOpen,
}: ProfileHeader) => {
  useStatusBarColor("--secondary-container");

  return (
    <>
      <ProfileEdit open={editOpen} setOpen={setEditOpen} />
      <div className="p-6 pt-10 bg-secondary-container md:bg-transparent flex flex-col items-center gap-8 md:gap-4 rounded-b-3xl">
        <div className="flex justify-between items-center w-full gap-4 md:hidden">
          <ProfileEditWidget isAuth={isAuth} setEditOpen={setEditOpen} />
          <h1 className="text-3xl text-primary text-center font-semibold w-full">
            Профиль
          </h1>
          {isAuth && <Exit />}
        </div>
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full"
          />
        ) : (
          <DefaultUser className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" />
        )}

        <h2 className="text-primary text-xl font-medium">
          {isAuth ? user?.username : "Гость"}
        </h2>
      </div>
    </>
  );
};
