import { Event as EventModel } from "@/entities/Event";
import { Event } from "@/widgets/EventsHorizontalList/ui/Event";
import { EventsSkeleton } from "@/widgets/EventsHorizontalList/ui/EventsSkeleton";

import { cn } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";

interface EventsHorizontalList {
  title?: string;
  events?: EventModel[];
  isLoading: boolean;
  emptyMessage?: string;
}

export const EventsHorizontalList = ({
  title,
  events = [],
  isLoading,
  emptyMessage = "Пока не нашлось подходящих мероприятий",
}: EventsHorizontalList) => {
  if (isLoading) {
    return <EventsSkeleton />;
  }

  return (
    <div className="group h-fit w-full bg-surface-container-low rounded-3xl py-3 [&>*]:select-none relative">
      {title && <h3 className="ml-4 mb-2 font-semibold">{title}</h3>}
      <Carousel
        className="w-full"
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {events.length ? (
            events.map((event) => (
              <CarouselItem key={event.id} className="basis-auto flex-shrink-0">
                <Event event={event} />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="pl-4">
              <h4 className="text-center w-full">{emptyMessage}</h4>
            </CarouselItem>
          )}
        </CarouselContent>

        <CarouselPrevious
          className={cn(
            "absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
            "duration-200 hover:bg-surface-container-high hidden md:block",
          )}
          size="sm"
        />
        <CarouselNext
          className={cn(
            "absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
            "duration-200 hover:bg-surface-container-high hidden md:block",
          )}
          size="sm"
        />
      </Carousel>
    </div>
  );
};
