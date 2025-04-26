import type { User } from "@/entities/User";
import { useUnit } from "effector-react";
import { useState } from "react";

import { ProfileEdit } from "@/pages/Profile/ui/ProfileEdit";

import { logoutEvent as logout } from "@/shared/auth";
import { DefaultUser } from "@/shared/icons/DefaultUser";
import { Edit } from "@/shared/icons/Edit";
import { Exit } from "@/shared/icons/Exit";
import { Button } from "@/shared/ui/button";

interface ProfileHeader {
  isAuth: boolean;
  user?: User | null;
}

export const ProfileHeader = ({ isAuth, user }: ProfileHeader) => {
  const logoutEvent = useUnit(logout);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <ProfileEdit open={editOpen} setOpen={setEditOpen} />
      <div className="md:mx-6 p-6 pt-10 bg-secondary-container flex flex-col items-center gap-4 rounded-b-3xl md:rounded-t-3xl">
        <div className="flex justify-between items-center w-full">
          {isAuth && (
            <Button
              variant="ghost"
              onClick={() => {
                setEditOpen(true);
              }}
            >
              <Edit className="text-primary size-[20px]" />
            </Button>
          )}
          <h1 className="text-3xl text-primary text-center font-semibold w-full">
            Профиль
          </h1>
          {isAuth && (
            <Button variant="ghost" onClick={logoutEvent}>
              <Exit className="text-primary size-[20px]" />
            </Button>
          )}
        </div>
        {user?.image_url ? (
          <img src={user.image_url} alt="User avatar" />
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
