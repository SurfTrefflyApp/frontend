import type { AxiosRequestConfig } from "axios";

import { setErrorCodeEvent } from "../model";
import type { RefreshInterceptor } from "./refresh";

export class ErrorHandler {
  private notInterceptedURLs = ["/login", "/users", "/auth", "/auth/refresh"];
  private refreshInterceptor: RefreshInterceptor;

  constructor(refreshInterceptor: RefreshInterceptor) {
    this.refreshInterceptor = refreshInterceptor;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleError(error: any) {
    const originalRequest: AxiosRequestConfig = error.config;
    const status = error.response?.status;
    if (error.code === "ECONNABORTED" || status === 504) {
      setErrorCodeEvent(504);
    }
    if (!error.response) return;

    if (
      status === 401 &&
      !this.notInterceptedURLs.includes(originalRequest.url ?? "")
    ) {
      return this.refreshInterceptor.refresh(error, originalRequest);
    } else if (
      !this.notInterceptedURLs.includes(originalRequest.url ?? "") &&
      originalRequest.method === "get" &&
      status !== 404
    ) {
      setErrorCodeEvent(400);
    }

    return Promise.reject(error);
  }
}
