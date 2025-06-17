import type { Event } from "@/entities/Event";
import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";
import { type Coords, getUserPosition } from "@/shared/coords/getUserPosition";

import { getEvents } from "../api";
import { type FiltersSchema, Time } from "./filtersSchema";

export const getUserPositionFx = createEffect(getUserPosition);

export const fetchEventsEvent = createEvent<FiltersSchema>();
export const pageMounted = createEvent();
export const pageUnmounted = createEvent();

export const fetchEventsFx = createEffect(
  async (request: {
    filters: FiltersSchema;
    latitude?: number;
    longitude?: number;
  }) => {
    return (
      await getEvents(request.filters, request.latitude, request.longitude)
    ).data;
  },
);

export const $events = createStore<Event[]>([])
  .on(fetchEventsFx.doneData, (_, payload) => payload)
  .reset(pageUnmounted);

export const $userCoords = createStore<Coords>({
  longitude: undefined,
  latitude: undefined,
}).on(getUserPositionFx.doneData, (_, coords) => coords);

export const $loading = createStore<boolean>(true).reset(pageUnmounted);

sample({
  clock: pageMounted,
  target: getUserPositionFx,
});

sample({
  clock: getUserPositionFx.doneData,
  fn: ({ latitude, longitude }) => ({
    filters: {
      keywords: "",
      tags: [],
      time: Time.all,
    },
    latitude,
    longitude,
  }),
  target: fetchEventsFx,
});

sample({
  clock: fetchEventsEvent,
  source: $userCoords,
  fn: (coords, filters) => ({
    filters,
    latitude: coords.latitude,
    longitude: coords.longitude,
  }),
  target: fetchEventsFx,
});

sample({
  clock: fetchEventsFx.fail,
  target: setErrorEvent,
});

sample({
  clock: fetchEventsFx.finally,
  fn: () => false,
  target: $loading,
});
