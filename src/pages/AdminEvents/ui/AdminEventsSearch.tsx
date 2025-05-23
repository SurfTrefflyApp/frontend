import { useUnit } from "effector-react";

import { Search } from "@/shared/icons/Search";
import { Input } from "@/shared/ui/input";

import { $keywordsQuery, eventsSearched } from "../controllers";

export const AdminEventsSearch = () => {
  const [keywords, handleSearch] = useUnit([$keywordsQuery, eventsSearched]);

  return (
    <Input
      value={keywords}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      variant="secondary"
      placeholder="Поиск по по названию"
      startIcon={Search}
      iconProps={{
        className: "text-primary",
      }}
      className="pl-10 py-2 bg-[#F4F4F0]"
    />
  );
};
