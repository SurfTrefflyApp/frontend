import { useUnit } from "effector-react";

import { EventCard } from "@/shared/ui/EventCard";
import { NotFound } from "@/shared/ui/NotFound";

import { $events, fetchEventsFx } from "../model/events";
import { EventsSearchListSkeleton } from "./EventsSearchListSkeleton";

export const EventsSearchList = () => {
  const events = useUnit($events);
  const loading = useUnit(fetchEventsFx.pending);

  if (loading) {
    return <EventsSearchListSkeleton />;
  }

  if (!events.length) {
    return <NotFound />;
  }

  return (
    <div className="lg:max-w-2/4 mx-auto grid grid-flow-row auto-rows-fr gap-4 p-2 mt-2">
      {events.map((event) => (
        <EventCard key={event.id} event={event} containerClassName="h-full" />
      ))}
    </div>
  );
};
