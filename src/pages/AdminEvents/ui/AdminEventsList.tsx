import { useUnit } from "effector-react";

import { NotFound } from "@/shared/ui/NotFound";

import { $events, $isLoading, eventDeleted } from "../controllers";
import { AdminEventsSkeleton } from "./AdminEventsSkeleton";
import { EventCard } from "./EventCard";

export const AdminEventsList = () => {
  const [events, loading, handleDelete] = useUnit([
    $events,
    $isLoading,
    eventDeleted,
  ]);

  if (loading) {
    return <AdminEventsSkeleton />;
  }

  if (!events.length) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto grid grid-flow row auto-rows-fr gap-4 p-2">
      {events.map((event) => (
        <EventCard event={event} onDelete={handleDelete} />
      ))}
    </div>
  );
};
