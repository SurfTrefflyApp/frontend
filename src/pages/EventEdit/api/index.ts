import { api } from "@/shared/api";

export function updateEvent(eventId: number, event: FormData) {
  return api.put(`/events/${eventId}`, event, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function deleteEvent(eventId: number) {
  return api.delete(`/events/${eventId}`);
}
