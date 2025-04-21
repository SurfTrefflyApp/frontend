import type { ServerEvent } from "@/widgets/EventForm";

import { api } from "@/shared/api";

export function updateEvent(eventId: number, event: ServerEvent) {
  return api.put(`/events/${eventId}`, event);
}

export function deleteEvent(eventId: number) {
  return api.delete(`/events/${eventId}`);
}
