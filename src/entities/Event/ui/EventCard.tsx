import type { Event } from "@/entities/Event";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router";

import { DefaultUser } from "../../../shared/icons/DefaultUser";
import { People } from "../../../shared/icons/People";
import { formatDateToDDMMYYYY } from "../../../shared/lib/dateUtils";
import { cn } from "../../../shared/lib/utils";
import { routes } from "../../../shared/router";
import { EventImagePreview } from "../../../shared/ui/EventImagePreview";

interface EventCard {
  event: Event;
  containerClassName?: string;
  linkClassName?: string;
}

export const EventCard = ({
  event,
  containerClassName,
  linkClassName,
}: EventCard) => {
  return (
    <Link
      to={routes.event.replace(":id", event.id.toString())}
      className={cn("hover:brightness-70", linkClassName)}
    >
      <figure
        className={cn(
          "w-full gap-1 bg-surface-container p-3 rounded-2xl",
          containerClassName,
        )}
      >
        <div className="flex flex-col gap-4">
          <div>
            {event.imageEventUrl ? (
              <img
                src={event.imageEventUrl}
                className="aspect-video h-full w-full rounded-2xl"
              />
            ) : (
              <EventImagePreview
                className="h-full min-h-full"
                titleClassName="w-[70px]"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <figcaption className="font-semibold leading-none flex-1 line-clamp-2 break-words hyphens-auto">
                {event.name}
              </figcaption>
              <div className="flex items-center gap-1">
                <span>
                  {event.participantCount}/{event.capacity}
                </span>
                <People />
              </div>
            </div>
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
            <div className="flex gap-2 w-full items-center mt-2">
              {event.imageUserUrl ? (
                <img
                  src={event.imageUserUrl}
                  className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full"
                />
              ) : (
                <DefaultUser className="min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full shadow-md" />
              )}
              <h4 className="line-clamp-1 w-full">{event.ownerUsername}</h4>
            </div>
            <p className="line-clamp-3 break-words hyphens-auto mt-1">
              {event.description}
            </p>
          </div>
        </div>
      </figure>
    </Link>
  );
};
