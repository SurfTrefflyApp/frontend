import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { getUserLimit } from "../api";

export const appStarted = createEvent<string>();

export const getLimitFx = createEffect(async () => {
  const result = await getUserLimit();
  return result.data;
});

export const setResetTimeFx = createEffect((resetTimeString: string) => {
  const date = new Date(resetTimeString);
  if (isNaN(date.getTime())) {
    throw new Error("Incorrect date format");
  }
  return date;
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

export let timerIntervalId: ReturnType<typeof setInterval>;

sample({
  clock: [setResetTimeFx.failData, getLimitFx.failData],
  fn: () => {
    clearInterval(timerIntervalId);
  },
});

sample({
  clock: appStarted,
  fn: () => {
    timerIntervalId = setInterval(() => {
      ticked();
    }, 1000);
  },
});
