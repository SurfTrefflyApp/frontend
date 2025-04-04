import { AxiosRequestConfig } from "axios";

import { api } from "@/shared/api/client";
import { setErrorCodeEvent, setErrorEvent } from "@/shared/api/model";
import { logoutWithoutApiEvent } from "@/shared/auth";
import { refresh } from "@/shared/auth/api";

export class RefreshInterceptor {
  private isRefreshing = false;

  public async refresh(error: unknown, originalRequest: AxiosRequestConfig) {
    if (!this.isRefreshing) {
      try {
        this.isRefreshing = true;
        await refresh();

        return api(originalRequest);
      } catch (refreshError) {
        logoutWithoutApiEvent();
        setErrorCodeEvent(401);
        setErrorEvent(refreshError);
        return Promise.reject(refreshError);
      } finally {
        this.isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
}
