import { Event as EventModel } from "@/entities/Event";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

import { Event } from "./Event";

export const EventsCarousel = ({ events }: { events: EventModel[] }) => {
  return (
    <Carousel
      className="w-full max-w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {events.map((event) => (
          <CarouselItem key={event.id}>
            <Event event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
