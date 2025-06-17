import type { Event as EventModel } from "@/entities/Event";
import AutoHeight from "embla-carousel-auto-height";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { cn } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";

import { Event } from "./Event";
import { PremiumSkeleton } from "./PremiumSkeleton";

interface EventsCarousel {
  events?: EventModel[];
  isLoading: boolean;
}

export const EventsCarousel = ({ events = [], isLoading }: EventsCarousel) => {
  if (isLoading) {
    return <PremiumSkeleton />;
  }

  return (
    <Carousel
      className="w-full max-w-full group"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
        }),
        AutoHeight(),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent
        className={cn({
          "md:justify-center": events.length < 3,
        })}
      >
        {events.map((event) => (
          <CarouselItem
            key={event.id}
            className="md:basis-1/2 lg:basis-1/3 lg:max-w-[500px]"
          >
            <Event event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          "absolute -left-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
          "duration-200 hover:bg-surface-container-high hidden md:block w-[60px] h-[60px]",
        )}
        size="lg"
      />
      <CarouselNext
        className={cn(
          "absolute -right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
          "duration-200 hover:bg-surface-container-high hidden md:block w-[60px] h-[60px]",
        )}
        size="lg"
      />
    </Carousel>
  );
};
