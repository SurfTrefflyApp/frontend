import { AxiosInstance, AxiosRequestConfig } from "axios";

import { setErrorCodeEvent, setErrorEvent } from "@/shared/api/model";
import { logoutWithoutApiEvent } from "@/shared/auth";
import { refresh } from "@/shared/auth/api";

export class RefreshInterceptor {
  private isRefreshing = false;
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async refresh(error: unknown, originalRequest: AxiosRequestConfig) {
    if (!this.isRefreshing) {
      try {
        this.isRefreshing = true;
        await refresh();
        return this.axiosInstance(originalRequest);
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
