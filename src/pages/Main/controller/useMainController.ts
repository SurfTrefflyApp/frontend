import type { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";

interface MainResponse {
  latest: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useMainController = () => {
  const { data, loading } = useFetch<MainResponse>("/events/home");

  return { data, loading: loading };
};
