import { ContentHeader } from "@/widgets/ContentHeader";
import { useUnit } from "effector-react";
import { useEffect } from "react";

import { usersInit } from "../controllers";
import { AdminUsersList } from "./AdminUsersList";
import { AdminUsersSearch } from "./AdminUsersSearch";

export const AdminUsers = () => {
  const initUsers = useUnit(usersInit);

  useEffect(() => {
    initUsers();
  }, []);

  return (
    <>
      <ContentHeader
        withBackArrow={false}
        className="md:hidden block py-2"
        title="Список пользователей"
        titleClassName="text-right"
      />
      <main className="h-full flex-1 flex flex-col gap-6 p-2 pt-4 md:pt-2 w-full mx-auto md:px-20 lg:max-w-1/2">
        <AdminUsersSearch />
        <AdminUsersList />
      </main>
    </>
  );
};
