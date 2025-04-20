import type { Event } from "@/entities/Event";
import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { getEvents } from "../api";
import { type FiltersSchema } from "./filters";

export const fetchEventsEvent = createEvent<FiltersSchema>();

export const fetchEventsFx = createEffect(async (filters: FiltersSchema) => {
  return (await getEvents(filters)).data.events;
});

export const $events = createStore<Event[]>([]).on(
  fetchEventsFx.doneData,
  (_, payload) => payload,
);

sample({
  clock: fetchEventsEvent,
  target: fetchEventsFx,
});

sample({
  clock: fetchEventsFx.fail,
  target: setErrorEvent,
});
