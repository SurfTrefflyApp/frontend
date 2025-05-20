import { useEventsController } from "../controllers/useEventsController";
import { EventCard } from "./EventCard";

export const AdminEvents = () => {
  const { events, handleDelete } = useEventsController();

  return (
    <main className="h-full flex-1 flex flex-col gap-6 px-20">
      <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4 p-2">
        {events.map((event) => (
          <EventCard event={event} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
};
