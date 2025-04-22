import type { Event } from "@/entities/Event";
import { EventsHorizontalList } from "@/widgets/EventsHorizontalList";

import { useFetch } from "@/shared/lib/useFetch";

export const ProfileEventsList = () => {
  const { data: events, loading } = useFetch<Event[]>("/users/me/owned-events");

  return (
    <>
      <EventsHorizontalList
        events={events}
        isLoading={loading}
        emptyMessage="Пока не нашлось твоих мероприятий"
      />
    </>
  );
};
