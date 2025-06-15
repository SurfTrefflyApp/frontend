import type { Event } from "@/entities/Event";
import { EventCard } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";
import { NotFound } from "@/shared/ui/NotFound";

import { EventsSearchListSkeleton } from "./EventsSkeleton";

export const EventsPast = () => {
  const { data: events, loading } = useFetch<Event[]>("/users/me/past-events");

  if (loading) {
    return <EventsSearchListSkeleton />;
  }

  if (!events?.length) {
    return <NotFound />;
  }

  return (
    <div className="grid grid-flow-row auto-rows-fr md:grid-cols-2 gap-4">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} containerClassName="h-full" />
      ))}
    </div>
  );
};
