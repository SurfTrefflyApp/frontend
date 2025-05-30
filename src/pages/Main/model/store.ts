import { createEffect, createEvent, createStore, sample } from "effector";

import { setErrorEvent } from "@/shared/api";
import { getUserPositionFx } from "@/shared/coords/store";

import { getEvents } from "../api";

interface MainResponse {
  latest: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const fetchEventsFx = createEffect<
  { longitude: number | undefined; latitude: number | undefined },
  MainResponse,
  Error
>(async ({ latitude, longitude }) => {
  return (await getEvents(latitude, longitude)).data;
});

export const pageMount = createEvent();
export const pageUnmount = createEvent();

export const $events = createStore<MainResponse | null>(null).reset(
  pageUnmount,
);
export const $loading = createStore<boolean>(true).reset(pageUnmount);

sample({
  clock: pageMount,
  target: getUserPositionFx,
});

sample({
  clock: getUserPositionFx.doneData,
  target: fetchEventsFx,
});

sample({
  clock: fetchEventsFx.fail,
  target: setErrorEvent,
});

sample({
  clock: fetchEventsFx.doneData,
  target: $events,
});

sample({
  clock: fetchEventsFx.finally,
  fn: () => false,
  target: $loading,
});
