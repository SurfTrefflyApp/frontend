// import type { User } from "@/entities/User";
// import { useFetch } from "@/shared/lib/useFetch";
// import { NotFound } from "@/shared/ui/NotFound";
// import { AdminUsersSkeleton } from "./AdminUsersSkeleton";
import { useUsersController } from "../controllers/useUsersController";
import { UserCard } from "./UserCard";

export const AdminUsers = () => {
  const { users, handleDelete } = useUsersController();
  // const { data: users, loading } = useFetch<User[]>("/admin/users");

  // if (loading) {
  //   return <AdminUsersSkeleton />;
  // }

  // if (!users?.length) {
  //   return <NotFound />;
  // }

  return (
    <main className="h-full flex-1 flex flex-col gap-6 px-20">
      <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4 p-2">
        {users.map((user) => (
          <UserCard user={user} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
};
