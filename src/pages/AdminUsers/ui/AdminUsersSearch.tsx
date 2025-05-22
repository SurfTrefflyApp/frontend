import { useUnit } from "effector-react";

import { Search } from "@/shared/icons/Search";
import { Input } from "@/shared/ui/input";

import { $searchQuery, usersSearched } from "../controllers";

export const AdminUsersSearch = () => {
  const [searchQuery, handleSearch] = useUnit([$searchQuery, usersSearched]);

  return (
    <Input
      value={searchQuery}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      variant="secondary"
      placeholder="Поиск по имени"
      startIcon={Search}
      iconProps={{
        className: "text-primary",
      }}
      className="pl-10 py-2 bg-[#F4F4F0]"
    />
  );
};
