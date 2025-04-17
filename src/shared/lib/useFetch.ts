import type { AxiosError, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

import { api } from "@/shared/api";

export const useFetch = <T>(
  url: string,
  shouldFetch = true,
  onSuccess?: (user: T) => void,
) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(shouldFetch);
  const [error, setError] = useState<AxiosError>();

  const execute = useCallback(async () => {
    try {
      setLoading(true);

      const response: AxiosResponse<T> = await api({
        url,
      });

      setData(response.data);
      onSuccess?.(response.data);
      return response.data;
    } catch (error: unknown) {
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess]);

  useEffect(() => {
    if (shouldFetch) {
      execute();
    }
  }, [execute, shouldFetch]);

  return {
    data,
    loading,
    error,
  };
};
