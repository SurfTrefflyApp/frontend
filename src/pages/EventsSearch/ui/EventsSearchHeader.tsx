import { Filters } from "@/shared/icons/Filters";
import { Button } from "@/shared/ui/button";

import { useFiltersController } from "../controller/useFiltersController";
import { EventsSearchFilters } from "./EventsSearchFilters";

export const EventsSearchHeader = () => {
  const filtersController = useFiltersController();

  return (
    <>
      <header className="flex items-center justify-between sticky bg-surface-container px-4 rounded-b-3xl shadow-md top-0 z-10">
        <Button
          variant="ghost"
          onClick={() => {
            filtersController.setOpenFilters(true);
          }}
        >
          <Filters />
        </Button>
        <h2 className="text-sm font-semibold">Поиск мероприятий</h2>
      </header>
      <EventsSearchFilters {...filtersController} />
    </>
  );
};
