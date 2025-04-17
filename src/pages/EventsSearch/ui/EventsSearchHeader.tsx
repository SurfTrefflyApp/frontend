import { useUnit } from "effector-react";

import { Filters } from "@/shared/icons/Filters";
import { Button } from "@/shared/ui/button";

import { setOpenFiltersEvent } from "../model/filters";
import { EventsSearchFilters } from "./EventsSearchFilters";

export const EventsSearchHeader = () => {
  const setOpenFilters = useUnit(setOpenFiltersEvent);

  return (
    <>
      <header className="flex items-center justify-between sticky bg-surface-container px-4 rounded-b-3xl shadow-md top-0 z-10">
        <Button
          variant="ghost"
          onClick={() => {
            setOpenFilters(true);
          }}
        >
          <Filters />
        </Button>
        <h2 className="text-sm font-semibold">Поиск мероприятий</h2>
      </header>
      <EventsSearchFilters />
    </>
  );
};
