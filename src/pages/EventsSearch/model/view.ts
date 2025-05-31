import { createEvent, createStore } from "effector";
import persist from "effector-localstorage";

export const viewToggled = createEvent();

export const $isListView = createStore(true).on(
  viewToggled,
  (currentState) => !currentState,
);

persist({
  store: $isListView,
  key: "listView",
});
