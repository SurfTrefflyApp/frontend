import type { Event } from "@/entities/Event";

import { api } from "@/shared/api";

import { mapFiltersToAPI } from "../mapper/filters";
import type { FiltersSchema } from "../model/filters";

export interface APIParams {
  keywords: string;
  tags: string;
  dateWithin: FiltersSchema["time"];
}

export function getEvents(filters: FiltersSchema) {
  return api.get<{ events: Event[] }>("/events", {
    params: mapFiltersToAPI(filters),
  });
}
