import type { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";
import { EventCard } from "@/shared/ui/EventCard";
import { NotFound } from "@/shared/ui/NotFound";

import { EventsSearchListSkeleton } from "./EventsSkeleton";

export const EventsUpcoming = () => {
  const { data: events, loading } = useFetch<Event[]>(
    "/users/me/upcoming-events",
  );

  if (loading) {
    return <EventsSearchListSkeleton />;
  }

  if (!events?.length) {
    return <NotFound />;
  }

  return (
    <div className="grid grid-flow-row auto-rows-fr gap-4">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} containerClassName="h-full" />
      ))}
    </div>
  );
};
