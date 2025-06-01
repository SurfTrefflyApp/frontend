import type { Event } from "@/entities/Event";

import { api } from "@/shared/api";

import { mapFiltersToAPI } from "../mapper/filters";
import type { FiltersSchema } from "../model/filtersSchema";

export interface APIParams {
  keywords: string;
  tags: string;
  dateWithin: FiltersSchema["time"];
}

export function getEvents(
  filters: FiltersSchema,
  latitude?: number,
  longitude?: number,
) {
  return api.get<Event[]>("/events", {
    params: {
      ...mapFiltersToAPI(filters),
      latitude,
      longitude,
    },
  });
}
