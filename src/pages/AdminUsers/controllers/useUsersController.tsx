import { useUnit } from "effector-react";
import { useState } from "react";

import { setErrorEvent } from "@/shared/api";

import { deleteUser, usersMock } from "../api";

export const useUsersController = () => {
  const [users, setUsers] = useState(usersMock);
  const setError = useUnit(setErrorEvent);

  const handleDelete = async (userId: number) => {
    try {
      const users = await deleteUser(userId);
      setUsers(users);
    } catch (e) {
      setError(e);
    }
  };

  return {
    users,
    handleDelete,
  };
};
