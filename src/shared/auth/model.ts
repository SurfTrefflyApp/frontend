import { createEffect, createEvent, createStore, sample } from "effector";

import { checkAuth, logout } from "@/shared/auth/api";

export const checkAuthFx = createEffect(async () => {
  await checkAuth();
});

const logoutFx = createEffect(async () => {
  await logout();
});

export const auth = createEvent();
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
  source: $isAuth,
  filter: (isAuth) => !isAuth,
  target: $isAdmin,
});
