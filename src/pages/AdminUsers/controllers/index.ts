import type { User } from "@/entities/User";
import { createEffect, createEvent, createStore, sample } from "effector";
import { debounce } from "patronum";

import { setErrorEvent } from "@/shared/api";

import { deleteUser, getUsers } from "../api";

const fetchUsersFx = createEffect<{ query: string }, User[], Error>(
  async ({ query }) => {
    const response = await getUsers(query);
    return response.data;
  },
);

const deleteUserFx = createEffect<number, User[], Error>(async (userId) => {
  const response = await deleteUser(userId);
  return response.data;
});

export const usersInit = createEvent();
export const usersSearched = createEvent<string>();
export const userDeleted = createEvent<number>();

export const $users = createStore<User[]>([])
  .on([fetchUsersFx.doneData, deleteUserFx.doneData], (_, users) => users)
  .reset(fetchUsersFx.fail);

export const $searchQuery = createStore<string>("").on(
  usersSearched,
  (_, query) => query,
);

export const $isLoading = createStore<boolean>(false).on(
  [fetchUsersFx.pending, deleteUserFx.pending],
  (_, pending) => pending,
);

const debouncedSearch = debounce(usersSearched, 300);

sample({
  clock: usersInit,
  fn: () => ({ query: "" }),
  target: fetchUsersFx,
});

sample({
  clock: [fetchUsersFx.fail, deleteUserFx.fail],
  fn: (fail) => fail.error,
  target: [setErrorEvent],
});

sample({
  clock: debouncedSearch,
  source: { query: $searchQuery, pending: fetchUsersFx.pending },
  filter: ({ pending }) => !pending,
  fn: ({ query }) => ({ query }),
  target: fetchUsersFx,
});

sample({
  clock: userDeleted,
  target: deleteUserFx,
});

sample({
  clock: deleteUserFx.done,
  source: $searchQuery,
  fn: (query) => ({ query }),
  target: fetchUsersFx,
});
