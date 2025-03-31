import { createEffect, createEvent, createStore, sample } from "effector";

import { checkAuth } from "@/shared/auth/api";

export const checkAuthFx = createEffect(async () => {
  await checkAuth();
});

export const auth = createEvent();
export const logout = createEvent();

const startApp = createEvent();

sample({
  clock: startApp,
  target: checkAuthFx,
});

export const $isAuth = createStore(false)
  .on(checkAuthFx.done, () => true)
  .on(auth, () => true)
  .reset(logout)
  .reset(checkAuthFx.fail);

startApp();
