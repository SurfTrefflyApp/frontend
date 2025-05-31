import { useUnit } from "effector-react";

import { EventCard } from "@/shared/ui/EventCard";
import { NotFound } from "@/shared/ui/NotFound";

import { $events, $loading } from "../model/events";
import { EventsSearchListSkeleton } from "./EventsSearchListSkeleton";
import { EventsSearchViewSwitch } from "./EventsSearchViewSwitch";

export const EventsSearchList = () => {
  const [events, loading] = useUnit([$events, $loading]);

  console.debug(events.length, loading);

  if (loading) {
    return <EventsSearchListSkeleton />;
  }

  if (!events.length) {
    return <NotFound />;
  }

  return (
    <div className="lg:max-w-2/4 mx-auto grid grid-flow-row auto-rows-fr gap-4 p-2 mt-2 -mb-10">
      {events.map((event) => (
        <EventCard key={event.id} event={event} containerClassName="h-full" />
      ))}
      <EventsSearchViewSwitch />
    </div>
  );
};
