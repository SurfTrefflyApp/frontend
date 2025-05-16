import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { getUserLimit } from "../api";

export const getLimitFx = createEffect(async () => {
  return await getUserLimit();
});

export const setResetTimeFx = createEffect((resetTimeString: string) => {
  return new Date(resetTimeString);
});

export const ticked = createEvent();

export const $timeLeft = createStore(0);

export const $limit = createStore(0).on(
  getLimitFx.doneData,
  (_, data) => data.limit,
);

export const $remaining = createStore(0).on(
  getLimitFx.doneData,
  (_, data) => data.remaining,
);

export const $resetTime = createStore<Date | null>(null).on(
  setResetTimeFx.doneData,
  (_, resetTime) => resetTime,
);

sample({
  clock: getLimitFx.doneData,
  fn: (data) => data.resetAt,
  target: setResetTimeFx,
});

sample({
  clock: ticked,
  source: $resetTime,
  fn: (resetTime) => {
    if (!resetTime) return 0;
    return Math.max(0, Math.ceil((+resetTime - Date.now()) / (1000 * 60)));
  },
  target: $timeLeft,
});

sample({
  clock: $resetTime,
  fn: (resetTime) => {
    if (!resetTime) return 0;
    return Math.max(0, Math.ceil((+resetTime - Date.now()) / (1000 * 60)));
  },
  target: $timeLeft,
});

sample({
  clock: ticked,
  source: $timeLeft,
  filter: (timeLeft) => timeLeft === 0,
  target: getLimitFx,
});

sample({
  clock: [getLimitFx.failData, setResetTimeFx.failData],
  target: setErrorEvent,
});

export const timerIntervalId = setInterval(() => {
  ticked();
}, 1000);
