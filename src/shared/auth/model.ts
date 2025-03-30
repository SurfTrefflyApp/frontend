import { createEvent, createStore } from "effector";

export const auth = createEvent();
export const logout = createEvent();

export const $isAuth = createStore(false)
  .on(auth, () => true)
  .reset(logout);
