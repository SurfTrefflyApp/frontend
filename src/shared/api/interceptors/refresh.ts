import { AxiosInstance, AxiosRequestConfig } from "axios";

import { setErrorCodeEvent, setErrorEvent } from "@/shared/api/model";
import { logoutWithoutApiEvent } from "@/shared/auth";
import { refresh } from "@/shared/auth/api";

export class RefreshInterceptor {
  private isRefreshing = false;
  private failedQueue: {
    resolve: (value?: unknown) => void;
    reject: (error: unknown) => void;
    request: AxiosRequestConfig;
  }[] = [];
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  private processQueue(error: unknown, tokenRefreshed = false) {
    this.failedQueue.forEach(({ resolve, reject, request }) => {
      if (tokenRefreshed) {
        resolve(this.axiosInstance(request));
      } else {
        reject(error);
      }
    });

    this.failedQueue = [];
  }

  public refresh(_: unknown, originalRequest: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.failedQueue.push({ resolve, reject, request: originalRequest });

      if (!this.isRefreshing) {
        this.isRefreshing = true;

        refresh()
          .then(() => {
            this.processQueue(null, true);
          })
          .catch((refreshError) => {
            logoutWithoutApiEvent();
            setErrorCodeEvent(401);
            setErrorEvent(refreshError);
            this.processQueue(refreshError, false);
          })
          .finally(() => {
            this.isRefreshing = false;
          });
      }
    });
  }
}
