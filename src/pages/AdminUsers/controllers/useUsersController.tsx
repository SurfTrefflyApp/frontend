import { useUnit } from "effector-react";
import { useState } from "react";

import { setErrorEvent } from "@/shared/api";
import { useDebounce } from "@/shared/lib/useDebounce";

import { deleteUser, usersMock } from "../api";

export const useUsersController = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersMock);
  const setError = useUnit(setErrorEvent);

  const handleSearch = async (searchString: string) => {
    console.debug(searchString);
  };

  useDebounce(search, 300, handleSearch);

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
    search,
    setSearch,
  };
};
