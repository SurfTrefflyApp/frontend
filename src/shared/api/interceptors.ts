import axios, { AxiosRequestConfig } from "axios";

import { api, setErrorEvent, setMessageEvent } from "@/shared/api";
import { logoutEvent } from "@/shared/auth";
import { refresh } from "@/shared/auth/api";

interface RetryQueueItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve: (value?: any) => void;
  reject: (error?: unknown) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];
const notInterceptedURLs = ["/login", "/auth", "/users"];

export function init() {
  let isRefreshing = false;

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest: AxiosRequestConfig = error.config;

      if (error.response) {
        if (
          error.response.status === 401 &&
          !notInterceptedURLs.includes(originalRequest.url ?? "")
        ) {
          if (!isRefreshing) {
            isRefreshing = true;
            try {
              await refresh();

              refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
                api
                  .request(config)
                  .then((response) => resolve(response))
                  .catch((error) => reject(error));
              });

              refreshAndRetryQueue.length = 0;

              return api(originalRequest);
            } catch (error: unknown) {
              logoutEvent();
              setErrorEvent(401);
              if (axios.isAxiosError(error)) {
                setMessageEvent({
                  title: error.response?.data.title,
                  subtitle: error.response?.data.subtitle,
                });
              }
            }
          }

          return new Promise<void>((resolve, reject) => {
            refreshAndRetryQueue.push({
              config: originalRequest,
              resolve,
              reject,
            });
          });
        }
        if (error.code === "ECONNABORTED" || error.response?.status === 504) {
          setErrorEvent(504);
        }
      }

      return Promise.reject(error);
    },
  );
}
