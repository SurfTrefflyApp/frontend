import type { Event as EventModel } from "@/entities/Event";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";

import { routes } from "@/shared/router";
import { EventImagePreview } from "@/shared/ui/EventImagePreview";

import { formatDateToDDMMYYYY } from "../../../shared/lib/dateUtils";

export const EventCardMini = ({ event }: { event: EventModel }) => {
  return (
    <Link to={routes.event.replace(":id", event.id.toString())}>
      <figure className="w-48 gap-1 bg-surface-container p-3 rounded-2xl flex flex-col hover:brightness-70 active:brightness-70">
        <div className="flex-1 mb-1">
          {event.imageEventUrl ? (
            <img
              src={event.imageEventUrl}
              className="aspect-video rounded-2xl h-full w-full"
            />
          ) : (
            <EventImagePreview
              className="aspect-video"
              titleClassName="w-[70px]"
            />
          )}
        </div>
        <figcaption className="line-clamp-1 font-semibold leading-none">
          {event.name}
        </figcaption>
        <div className="flex gap-2 w-full item-start">
          <Calendar className="text-primary w-[20px]" />
          <h4 className="line-clamp-1 w-full">
            {formatDateToDDMMYYYY(event.date)}
          </h4>
        </div>
        <div className="flex gap-2 w-full items-center">
          <MapPin className="text-primary w-[20px]" />
          <h4 className="line-clamp-1 w-full">{event.address}</h4>
        </div>
      </figure>
    </Link>
  );
};
