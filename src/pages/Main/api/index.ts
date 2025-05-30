import { api } from "@/shared/api";

export function getEvents(latitude?: number, longitude?: number) {
  return api.get("/events/home", { params: { latitude, longitude } });
}
