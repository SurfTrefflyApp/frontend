import type { Event } from "@/entities/Event";
import { createEffect, createEvent, createStore, sample } from "effector";
import { debounce } from "patronum";

import { setErrorEvent } from "@/shared/api";

import { deleteEvent, getEvents } from "../api";

const fetchEventsFx = createEffect<{ keywords: string }, Event[], Error>(
  async ({ keywords }) => {
    const response = await getEvents(keywords);
    return response.data;
  },
);

const deleteEventFx = createEffect(async (eventId: number) => {
  const response = await deleteEvent(eventId);
  return response.data;
});

export const eventsInit = createEvent();
export const eventsSearched = createEvent<string>();
export const eventDeleted = createEvent<number>();

export const $events = createStore<Event[]>([])
  .on([fetchEventsFx.doneData], (_, events) => events)
  .reset(fetchEventsFx.fail);

export const $keywordsQuery = createStore<string>("").on(
  eventsSearched,
  (_, query) => query,
);

export const $isLoading = createStore<boolean>(false).on(
  [fetchEventsFx.pending, deleteEventFx.pending],
  (_, pending) => pending,
);

const debouncedSearch = debounce(eventsSearched, 300);

sample({
  clock: eventsInit,
  fn: () => ({ keywords: "" }),
  target: fetchEventsFx,
});

sample({
  clock: [fetchEventsFx.fail, deleteEventFx.fail],
  fn: (fail) => fail.error,
  target: [setErrorEvent],
});

sample({
  clock: debouncedSearch,
  source: { keywords: $keywordsQuery, pending: fetchEventsFx.pending },
  filter: ({ pending }) => !pending,
  fn: ({ keywords }) => ({ keywords }),
  target: fetchEventsFx,
});

sample({
  clock: eventDeleted,
  target: deleteEventFx,
});

sample({
  clock: deleteEventFx.done,
  source: $keywordsQuery,
  fn: (keywords) => ({ keywords }),
  target: fetchEventsFx,
});
