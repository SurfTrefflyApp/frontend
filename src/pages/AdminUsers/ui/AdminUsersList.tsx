import { useUnit } from "effector-react";

import { NotFound } from "@/shared/ui/NotFound";

import { $isLoading, $users, userDeleted } from "../controllers";
import { AdminUsersSkeleton } from "./AdminUsersSkeleton";
import { UserCard } from "./UserCard";

export const AdminUsersList = () => {
  const [users, loading, deleteUser] = useUnit([
    $users,
    $isLoading,
    userDeleted,
  ]);

  if (loading) {
    return <AdminUsersSkeleton />;
  }

  if (!users.length) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={deleteUser} />
      ))}
    </div>
  );
};
