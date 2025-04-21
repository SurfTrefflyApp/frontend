import { useMediaQuery } from "react-responsive";

import { xl2 } from "@/shared/consts/breakpoints";
import { Filters } from "@/shared/icons/Filters";
import { AdaptivePopover } from "@/shared/ui/AdaptivePopover";
import { Button } from "@/shared/ui/button";

import { useFiltersController } from "../controller/useFiltersController";
import { EventsSearchFilters } from "./EventsSearchFilters";

export const EventsSearchHeader = () => {
  const filtersController = useFiltersController();
  const isDesktop = useMediaQuery({ query: `(min-width: ${xl2}px)` });

  return (
    <>
      <header className="flex items-center justify-between sticky bg-surface-container px-4 rounded-b-3xl md:rounded-none shadow-md top-0 z-10">
        {!isDesktop && (
          <>
            <Button
              variant="ghost"
              onClick={() => {
                filtersController.setOpenFilters(true);
              }}
            >
              <Filters />
            </Button>
            <h2 className="text-sm font-semibold">Поиск мероприятий</h2>
          </>
        )}
      </header>
      {!isDesktop ? (
        <AdaptivePopover
          open={filtersController.filtersOpen}
          setOpen={filtersController.setOpenFilters}
        >
          <EventsSearchFilters {...filtersController} />
        </AdaptivePopover>
      ) : (
        <EventsSearchFilters {...filtersController} />
      )}
    </>
  );
};
