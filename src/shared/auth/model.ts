import { createEffect, createEvent, createStore, sample } from "effector";

import { checkAuth, logout } from "@/shared/auth/api";

export const checkAuthFx = createEffect(async () => {
  const response = await checkAuth();
  return response.data;
});

const logoutFx = createEffect(async () => {
  await logout();
});

export const auth = createEvent<{ isAdmin?: boolean }>();
export const logoutEvent = createEvent();
export const logoutWithoutApiEvent = createEvent();
export const startApp = createEvent();

export const $isAuth = createStore(false)
  .on(checkAuthFx.done, () => true)
  .on(auth, () => true)
  .on(logoutFx.done, () => false)
  .on(logoutWithoutApiEvent, () => false)
  .reset(checkAuthFx.fail);

export const $isAdmin = createStore(false);

sample({
  clock: logoutEvent,
  target: logoutFx,
});

sample({
  clock: startApp,
  target: checkAuthFx,
});

sample({
  clock: [auth, checkAuthFx.doneData],
  fn: (authState) => authState?.isAdmin || false,
  target: $isAdmin,
});

sample({
  source: $isAuth,
  filter: (isAuth) => !isAuth,
  target: $isAdmin,
});
