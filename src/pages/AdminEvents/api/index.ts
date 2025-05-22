import type { Event } from "@/entities/Event";

import { api } from "@/shared/api";

export function getEvents(keywords: string) {
  return api.get<Event[]>("/admin/events", { params: { keywords } });
}

export function deleteEvent(eventId: number) {
  return api.delete(`/admin/events/${eventId}`);
}
