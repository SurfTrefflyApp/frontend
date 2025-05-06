import { useEffect, useState } from "react";

import { refresh } from "../api";

export const useRefresh = () => {
  const [refreshed, setRefreshed] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setRefreshing(true);
    refresh().finally(() => {
      setRefreshed(true);
      setRefreshing(false);
    });
  }, []);

  return {
    refreshed,
    refreshing,
  };
};
