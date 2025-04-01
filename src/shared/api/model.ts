import { createEvent, createStore } from "effector";

import { ErrorResponse } from "@/shared/auth";
import { routes } from "@/shared/router";

export const errorPages: {
  [key: number]: (typeof routes)[keyof typeof routes];
} = {
  504: routes.timeout,
  401: routes.login,
} as const;

export type errorsKeys = keyof typeof errorPages;
export type errorValues = (typeof errorPages)[errorsKeys];

export const setMessageEvent = createEvent<ErrorResponse>();

const defaultTitle = "Ошибка сервера";
const defaultSubtitle = "Что-то пошло не так. Попробуйте позже";

export const $message = createStore<ErrorResponse | null>(null).on(
  setMessageEvent,
  (_, message) => {
    if (!message) return null;
    return {
      title: message.title ?? defaultTitle,
      subtitle: message.subtitle ?? defaultSubtitle,
    };
  },
);

export const setErrorEvent = createEvent<errorsKeys | null>();

export const $error = createStore<errorValues | null>(null).on(
  setErrorEvent,
  (_, error) => (error ? errorPages[error] : null),
);
