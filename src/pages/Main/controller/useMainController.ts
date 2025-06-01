import { useUnit } from "effector-react";
import { useEffect } from "react";

import { $events, $loading, pageMount, pageUnmount } from "../model/store";

export const useMainController = () => {
  const [events, loading] = useUnit([$events, $loading]);
  const [mountPage, unmountPage] = useUnit([pageMount, pageUnmount]);

  useEffect(() => {
    mountPage();

    return () => {
      unmountPage();
    };
  }, [mountPage, unmountPage]);

  return { data: events, loading: loading };
};
