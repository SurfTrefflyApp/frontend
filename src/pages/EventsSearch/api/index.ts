import type { Event } from "@/entities/Event";

import { api } from "@/shared/api";

import type { Filters } from "../model/filters";

export function getEvents(filters: Filters) {
  return api.get<{ events: Event[] }>("/events", {
    params: filters,
  });
}
