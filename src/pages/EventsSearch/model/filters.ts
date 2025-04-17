import { createEvent, createStore } from "effector";

export const setOpenFiltersEvent = createEvent<boolean>();
export const setTagsOpenEvent = createEvent<boolean>();

export const $filtersOpen = createStore<boolean>(false).on(
  setOpenFiltersEvent,
  (_, payload) => payload,
);

export const $tagsOpen = createStore<boolean>(false).on(
  setTagsOpenEvent,
  (_, payload) => payload,
);
