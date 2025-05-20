// import type { User } from "@/entities/User";
// import { useFetch } from "@/shared/lib/useFetch";
// import { NotFound } from "@/shared/ui/NotFound";
// import { AdminUsersSkeleton } from "./AdminUsersSkeleton";
import { ContentHeader } from "@/widgets/ContentHeader";

import { Search } from "@/shared/icons/Search";
import { Input } from "@/shared/ui/input";

import { useUsersController } from "../controllers/useUsersController";
import { UserCard } from "./UserCard";

export const AdminUsers = () => {
  const { users, handleDelete, search, setSearch } = useUsersController();
  // const { data: users, loading } = useFetch<User[]>("/admin/users");

  // if (loading) {
  //   return <AdminUsersSkeleton />;
  // }

  // if (!users?.length) {
  //   return <NotFound />;
  // }

  return (
    <>
      <ContentHeader
        withBackArrow={false}
        className="md:hidden block py-2"
        title="Список пользователей"
        titleClassName="text-right"
      />
      <main className="h-full flex-1 flex flex-col gap-6 p-2 pt-4 md:pt-2 w-full mx-auto md:px-20 lg:max-w-1/2">
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          variant="secondary"
          placeholder="Поиск по имени"
          startIcon={Search}
          iconProps={{
            className: "text-primary",
          }}
          className="pl-10 py-2 bg-[#F4F4F0]"
        />
        <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4">
          {users.map((user) => (
            <UserCard user={user} onDelete={handleDelete} />
          ))}
        </div>
      </main>
    </>
  );
};
