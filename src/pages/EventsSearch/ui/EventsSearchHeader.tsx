import { Filters } from "@/shared/icons/Filters";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { Button } from "@/shared/ui/button";

import { useFiltersController } from "../controller/useFiltersController";
import { EventsSearchFilters } from "./EventsSearchFilters";

export const EventsSearchHeader = () => {
  const filtersController = useFiltersController();

  return (
    <>
      <header
        className={`flex items-center justify-between sticky bg-surface-container px-4
        rounded-b-3xl md:rounded-none shadow-md top-0 z-10 md:top-[var(--appbar-height)]`}
      >
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
      <AdaptivePopover
        open={filtersController.filtersOpen}
        setOpen={filtersController.setOpenFilters}
      >
        <EventsSearchFilters {...filtersController} />
      </AdaptivePopover>
    </>
  );
};
