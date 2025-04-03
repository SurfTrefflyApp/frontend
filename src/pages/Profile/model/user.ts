import { User } from "@/entities/user";
import { createEvent, createStore } from "effector";

export const setUserEvent = createEvent<User | null>();
export const setUsernameEvent = createEvent<string>();

export const $user = createStore<User | null>(null)
  .on(setUserEvent, (_, user) => user)
  .on(setUsernameEvent, (state, username) => {
    if (!state) return;

    return { ...state, username };
  });
