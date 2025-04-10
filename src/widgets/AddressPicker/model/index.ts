import { Address } from "@/entities/Address";
import { createEvent, createStore } from "effector";

export const setAddressEvent = createEvent<Address>();

export const $address = createStore<Address>({
  address: "Воронеж",
  coordinates: [51.6606, 39.2006],
}).on(setAddressEvent, (_, payload) => payload);
