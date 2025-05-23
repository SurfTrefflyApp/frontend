import type { Address } from "@/entities/Address";
import { createEvent, createStore } from "effector";

export const setAddressEvent = createEvent<Address>();

export const $address = createStore<Address | null>(null).on(
  setAddressEvent,
  (_, payload) => payload,
);

export const $defaultCoords = createStore<Address["coordinates"]>([
  51.6606, 39.2006,
]);
