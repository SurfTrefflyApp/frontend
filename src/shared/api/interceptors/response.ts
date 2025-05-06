import { api } from "@/shared/api";
import { RefreshInterceptor } from "@/shared/api/interceptors/refresh";

import { ErrorHandler } from "./errorHandler";

export function initResponseInterceptors() {
  const refreshInterceptor = RefreshInterceptor.getInstance(api);
  const errorHandler = new ErrorHandler(refreshInterceptor);
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      return errorHandler.handleError(error);
    },
  );
}
