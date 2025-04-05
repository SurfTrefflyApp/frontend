import { Event as EventModel } from "@/entities/Event";
import { Link } from "react-router";

import { Calendar } from "@/shared/icons/Calendar";
import { Person } from "@/shared/icons/Person";
import { Premium } from "@/shared/icons/Premium";
import { useEventDateTime } from "@/shared/lib/useEventDateTime";
import { routes } from "@/shared/router";
import { EventImagePreview } from "@/shared/ui/EventImagePreview";

export const Event = ({ event }: { event: EventModel }) => {
  const dateTime = useEventDateTime(event.date);

  return (
    <Link to={routes.event.replace(":id", event.id.toString())}>
      <figure className="aspect-3/2 bg-surface-container rounded-lg p-2 flex flex-col gap-2">
        <div className="flex-1">
          {event?.preview ? (
            <img
              className="aspect-video w-full rounded-lg bg-surface-container-highest"
              src={event.preview}
              alt="Preview"
            />
          ) : (
            <EventImagePreview />
          )}
        </div>
        <div className="px-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {event.isPremium && <Premium className="w-[25px] h-[25px]" />}
            <figcaption className="leading-none font-semibold">
              {event.name}
            </figcaption>
          </div>
          <div className="flex gap-2 items-center">
            <Person className="text-primary" />
            <h3 className="leading-none text-sm">{event.ownerName}</h3>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-[30px] h-[30px]" />
            <h3 className="leading-none text-sm">{dateTime}</h3>
          </div>
        </div>
      </figure>
    </Link>
  );
};
