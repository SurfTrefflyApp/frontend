import { useUnit } from "effector-react";

import { EventCard } from "@/shared/ui/EventCard";
import { NotFound } from "@/shared/ui/NotFound";

import { $events, $loading } from "../model/events";
import { EventsSearchListSkeleton } from "./EventsSearchListSkeleton";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearchList = () => {
  const [events, loading] = useUnit([$events, $loading]);

  if (loading) {
    return <EventsSearchListSkeleton />;
  }

  if (!events.length) {
    return <NotFound />;
  }

  return (
    <div
      className={`lg:max-w-[1200px] mx-auto grid grid-flow-row auto-rows-fr
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 lg:px-20 mt-2 -mb-10`}
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} containerClassName="h-full" />
      ))}
      <EventsSearchViewSwitch />
    </div>
  );
};
