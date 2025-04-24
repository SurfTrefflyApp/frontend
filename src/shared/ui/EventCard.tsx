import type { Event } from "@/entities/Event";
import { Calendar, MapPin, User } from "lucide-react";
import { Link } from "react-router";

import { cn } from "../lib/utils";
import { routes } from "../router";
import { EventImagePreview } from "./EventImagePreview";

interface EventCard {
  event: Event;
  containerClassName?: string;
}

export const EventCard = ({ event, containerClassName }: EventCard) => {
  return (
    <Link to={routes.event.replace(":id", event.id.toString())}>
      <figure
        className={cn(
          "h-full w-full gap-1 bg-surface-container p-3 rounded-2xl grid grid-rows-auto hover:opacity-60 active:opacity-60",
          containerClassName,
        )}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-1">
            <EventImagePreview className="h-full" titleClassName="w-[70px]" />
          </div>
          <div className="h-full flex flex-col">
            <figcaption className="line-clamp-1 font-semibold leading-none">
              {event.name}
            </figcaption>
            <div className="flex gap-2 w-full item-start">
              <Calendar className="text-primary w-[20px]" />
              <h4 className="line-clamp-1 w-full">
                {new Date(event.date).toString()}
              </h4>
            </div>
            <div className="flex gap-2 w-full items-center">
              <MapPin className="text-primary w-[20px]" />
              <h4 className="line-clamp-1 w-full">{event.address}</h4>
            </div>
            <div className="flex gap-2 w-full items-center">
              <User className="text-primary w-[20px]" />
              <h4 className="line-clap-1 w-full">{event.ownerUsername}</h4>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="line-clamp-3 break-all text-center">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </figure>
    </Link>
  );
};
