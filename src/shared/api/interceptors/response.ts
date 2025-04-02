import { AxiosRequestConfig } from "axios";

import { api, setErrorEvent } from "@/shared/api";
import { RefreshInterceptor } from "@/shared/api/interceptors/refresh";

const notInterceptedURLs = ["/login", "/auth", "/users"];

export function initResponseInterceptors() {
  const refreshInterceptor = new RefreshInterceptor();
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest: AxiosRequestConfig = error.config;
      if (!error.response) return;

      if (error.code === "ECONNABORTED" || error.response?.status === 504) {
        setErrorEvent(504);
      } else if (
        error.response.status === 401 &&
        !notInterceptedURLs.includes(originalRequest.url ?? "")
      ) {
        return refreshInterceptor.refresh(error, originalRequest);
      }

      return Promise.reject(error);
    },
  );
}
