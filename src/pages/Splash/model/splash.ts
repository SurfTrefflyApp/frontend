import { createEvent, createStore } from "effector";

export const endAnimation = createEvent();

export const $animating = createStore(true).on(endAnimation, () => false);
