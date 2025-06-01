import type { Event } from "@/entities/Event";
import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";
import { refresh } from "@/shared/auth/api";

import { getEvent, subscribe, unsubscribe } from "../api";

export const subscribeFx = createEffect(async (eventId: number) => {
  return (await subscribe(eventId)).data;
});

export const unsubscribeFx = createEffect(async (eventId: number) => {
  return (await unsubscribe(eventId)).data;
});

export const refreshFx = createEffect(async () => {
  return (await refresh()).data;
});

interface FetchPayload {
  eventId: number;
  invite?: string;
}

export const fetchEventFx = createEffect<FetchPayload, Event, Error>(
  async ({ eventId, invite }) => {
    return (await getEvent(eventId, invite)).data;
  },
);

export const eventInit = createEvent<{ eventId: number; invite?: string }>();
export const subscribeEvent = createEvent<number>();
export const unsubscribeEvent = createEvent<number>();
const eventSet = createEvent();
export const eventReset = createEvent();

export const $event = createStore<Event | null>(null)
  .on(eventSet, (_, payload) => payload)
  .reset(eventReset);

export const $loading = createStore(true);

const $eventId = createStore<number | null>(null).on(
  eventInit,
  (_, payload) => payload.eventId,
);

const $inviteToken = createStore<string>("");

sample({
  clock: eventInit,
  fn: (payload) => payload.invite ?? "",
  target: $inviteToken,
});

sample({
  clock: subscribeEvent,
  target: subscribeFx,
});

sample({
  clock: unsubscribeEvent,
  target: unsubscribeFx,
});

sample({
  clock: subscribeFx.doneData,
  target: $event,
});

sample({
  clock: unsubscribeFx.doneData,
  target: $event,
});

sample({
  clock: [subscribeFx.fail, unsubscribeFx.fail],
  target: setErrorEvent,
});

sample({
  clock: eventInit,
  target: refreshFx,
});

sample({
  clock: [refreshFx.pending, fetchEventFx.pending],
  target: $loading,
});

sample({
  clock: fetchEventFx.done,
  fn: () => false,
  target: $loading,
});

sample({
  clock: [fetchEventFx.fail],
  target: setErrorEvent,
});

sample({
  clock: [refreshFx.done, refreshFx.fail],
  source: { eventId: $eventId, invite: $inviteToken },
  fn: (source) => source as FetchPayload,
  target: fetchEventFx,
});

sample({
  clock: fetchEventFx.doneData,
  target: eventSet,
});
