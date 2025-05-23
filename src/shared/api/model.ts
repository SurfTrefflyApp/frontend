import axios from "axios";
import { createEvent, createStore } from "effector";

import type { ErrorResponse } from "@/shared/api";
import { routes } from "@/shared/router";

export const errorPages: {
  [key: number]: (typeof routes)[keyof typeof routes];
} = {
  504: routes.timeout,
  401: routes.login,
  400: routes.getError,
} as const;

export type errorsKeys = keyof typeof errorPages;
export type errorValues = (typeof errorPages)[errorsKeys];

export const setErrorEvent = createEvent<unknown>();

const defaultTitle = "Ошибка сервера";
const defaultSubtitle = "Что-то пошло не так. Попробуй позже";

export const $error = createStore<ErrorResponse | null>(null).on(
  setErrorEvent,
  (_, error) => {
    if (!error) return null;
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return {
        title: error.response?.data.title,
        subtitle: error.response?.data.subtitle,
      };
    }

    return {
      title: defaultTitle,
      subtitle: defaultSubtitle,
    };
  },
);

export const setErrorCodeEvent = createEvent<errorsKeys | null>();

export const $errorPageURL = createStore<errorValues | null>(null).on(
  setErrorCodeEvent,
  (_, code) => (code ? errorPages[code] : null),
);
