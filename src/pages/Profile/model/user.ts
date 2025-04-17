import type { Tag } from "@/entities/Tag";
import type { User } from "@/entities/User";
import { createEvent, createStore } from "effector";

export const setUserEvent = createEvent<User | null>();
export const setUsernameEvent = createEvent<string>();
export const setTagsEvent = createEvent<Tag[]>();

export const $user = createStore<User | null>(null)
  .on(setUserEvent, (_, user) => user)
  .on(setUsernameEvent, (state, username) => {
    if (!state) return;

    return { ...state, username };
  })
  .on(setTagsEvent, (state, tags) => {
    if (!state) return;

    return { ...state, tags };
  });
