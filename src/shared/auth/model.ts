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
const startApp = createEvent();

export const $isAuth = createStore(false)
  .on(checkAuthFx.done, () => true)
  .on(auth, () => true)
  .on(logoutFx.done, () => false)
  .reset(checkAuthFx.fail);

sample({
  clock: logoutEvent,
  target: logoutFx,
});

sample({
  clock: startApp,
  target: checkAuthFx,
});

startApp();
