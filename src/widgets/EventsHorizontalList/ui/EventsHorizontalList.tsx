import { Event as EventModel } from "@/entities/Event";
import { Event } from "@/widgets/EventsHorizontalList/ui/Event";

import { useHorizontalScroll } from "@/shared/lib/useHorizontalScroll";
import { cn } from "@/shared/lib/utils";

interface EventsHorizontalList {
  title: string;
  events: EventModel[];
}

export const EventsHorizontalList = ({
  title,
  events,
}: EventsHorizontalList) => {
  const scrollRef = useHorizontalScroll(3);

  return (
    <div className="h-fit w-full bg-surface-container-low rounded-3xl p-3 [&>*]:select-none">
      <h3 className="ml-4 mb-2 font-semibold">{title}</h3>
      <div
        className={cn(
          "h-full w-full flex flex-none gap-4 overflow-x-scroll no-scrollbar",
        )}
        ref={scrollRef}
      >
        {events.length ? (
          events.map((event) => <Event key={event.id} event={event} />)
        ) : (
          <h4 className="text-center w-full">
            Пока не нашлось подходящих мероприятий
          </h4>
        )}
      </div>
    </div>
  );
};
