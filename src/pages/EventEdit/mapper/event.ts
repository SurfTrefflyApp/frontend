import type { Address } from "@/entities/Address";
import type { Event } from "@/entities/Event";
import type { EventSchema } from "@/widgets/EventForm";

export function mapAPIEventToEventSchema(event: Event): EventSchema {
  return {
    title: event.name,
    dateTime: mapDateTime(event.date),
    participantsCount: event.capacity,
    description: event.description,
    location: mapAddress(event),
    eventType: event.isPrivate ? "private" : "public",
    tags: event.tags,
  };
}

function mapDateTime(dateString: string) {
  const [date, time] = dateString.split("T");
  const [h, m] = time.split(":");
  return `${date.split("-").reverse().join(".")} ${h}:${m}`;
}

export function mapAddress(event: Event): Address {
  return {
    address: event.address,
    coordinates: [event.latitude, event.longitude],
  };
}
