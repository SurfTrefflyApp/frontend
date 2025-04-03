import { User } from "@/entities/user";
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
  user?: User;
}

export const ProfileHeader = ({ isAuth, user }: ProfileHeader) => {
  const logoutEvent = useUnit(logout);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <ProfileEdit open={editOpen} setOpen={setEditOpen} />
      <div className="p-6 pt-10 bg-secondary-container flex flex-col items-center gap-4 rounded-b-3xl">
        <div className="flex justify-between items-center w-full">
          {isAuth && (
            <Button
              variant="ghost"
              onClick={() => {
                setEditOpen(true);
              }}
            >
              <Edit className="size-[24px]" />
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
          {isAuth ? user?.username : "Гость"}
        </h2>
      </div>
    </>
  );
};
