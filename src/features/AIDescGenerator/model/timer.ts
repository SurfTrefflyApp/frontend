import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";

import { getUserLimit } from "../api";

export let timerIntervalId: ReturnType<typeof setInterval>;

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

const createIntervalFx = createEffect(() => {
  timerIntervalId = setInterval(() => {
    ticked();
  }, 1000);
});

const clearIntervalFx = createEffect(() => {
  clearInterval(timerIntervalId);
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

export const $displayTimer = createStore(false);

sample({
  clock: appStarted,
  target: getLimitFx,
});

sample({
  clock: getLimitFx.doneData,
  fn: (data) => data.resetAt,
  target: setResetTimeFx,
});

sample({
  clock: getLimitFx.doneData,
  fn: (limit) => limit.remaining !== limit.limit,
  target: $displayTimer,
});

sample({
  clock: getLimitFx.doneData,
  filter: (limit) => limit.remaining !== limit.limit,
  target: createIntervalFx,
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
  target: [setErrorEvent, clearIntervalFx],
});
