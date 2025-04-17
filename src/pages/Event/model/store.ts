import type { Event } from "@/entities/Event";
import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { subscribe, unsubscribe } from "../api";

export const subscribeFx = createEffect(async (eventId: number) => {
  return (await subscribe(eventId)).data;
});

export const unsubscribeFx = createEffect(async (eventId: number) => {
  return (await unsubscribe(eventId)).data;
});

export const subscribeEvent = createEvent<number>();
export const unsubscribeEvent = createEvent<number>();
export const setEventEvent = createEvent();

export const $event = createStore<Event | null>(null).on(
  setEventEvent,
  (_, payload) => payload,
);

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
