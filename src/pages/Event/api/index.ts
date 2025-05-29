import type { Event } from "@/entities/Event";

import { api } from "@/shared/api";

export function subscribe(eventId: number) {
  return api.post<Event>(`/events/${eventId}/subscription`);
}

export function unsubscribe(eventId: number) {
  return api.delete<Event>(`/events/${eventId}/subscription`);
}

export function generateInviteToken(eventId: number) {
  return api.get<{ token: string }>(`/events/${eventId}/invite`);
}

export function createPremiumPayment(eventId: number) {
  return api.post<{ id: number }>("/premium-payment", {
    event_id: eventId,
  });
}
