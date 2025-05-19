import { EventCard } from "@/shared/ui/EventCard";

import { useEventsController } from "../controllers/useEventsController";

export const AdminEvents = () => {
  const { events } = useEventsController();

  return (
    <main className="h-full flex-1 flex flex-col gap-6 px-20">
      <div className="w-full lg:max-w-2/4 mx-auto grid grid-flow row auto-rows-fr gap-4 p-2">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </main>
  );
};
