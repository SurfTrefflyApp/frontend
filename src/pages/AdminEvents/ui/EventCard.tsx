import type { Event } from "@/entities/Event";
import { Calendar, MapPin } from "lucide-react";

import { DefaultUser } from "@/shared/icons/DefaultUser";
import { People } from "@/shared/icons/People";
import { Trash } from "@/shared/icons/Trash";
import { formatDateWithIntl } from "@/shared/lib/dateUtils";
import { cn } from "@/shared/lib/utils";
import { EventImagePreview } from "@/shared/ui/EventImagePreview";
import { Button } from "@/shared/ui/button";

interface EventCard {
  event: Event;
  containerClassName?: string;
  onDelete: (eventId: number) => void;
}

export const EventCard = ({
  event,
  containerClassName,
  onDelete,
}: EventCard) => {
  return (
    <figure
      className={cn(
        "w-full gap-1 bg-surface-container p-3 rounded-2xl grid grid-rows-auto max-w-[600px]",
        containerClassName,
      )}
    >
      <div className="grid grid-cols-2 gap-4">
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
              {formatDateWithIntl(event.date)}
            </h4>
          </div>
          <div className="flex gap-2 w-full items-center">
            <MapPin className="text-primary w-[20px]" />
            <h4 className="line-clamp-1 w-full">{event.address}</h4>
          </div>
          <div className="flex gap-2 w-full items-center mb-2">
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
          <div className="flex">
            <p className="line-clamp-3 break-words hyphens-auto">
              {event.description}
            </p>
          </div>
          <Button
            variant="ghost"
            className="w-fit ml-auto mt-auto"
            onClick={() => {
              onDelete(event.id);
            }}
          >
            <Trash className="size-6" />
          </Button>
        </div>
      </div>
    </figure>
  );
};
