import { AxiosError, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

import { api } from "@/shared/api";

export const useFetch = <T>(url: string, shouldFetch = true) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const execute = useCallback(async () => {
    try {
      setLoading(true);

      const response: AxiosResponse<T> = await api({
        url,
      });

      setData(response.data);
      return response.data;
    } catch (error: unknown) {
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    console.debug(shouldFetch);
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
