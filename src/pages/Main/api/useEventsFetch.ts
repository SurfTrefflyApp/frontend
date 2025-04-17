import type { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";

interface MainResponse {
  latest: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useEventsFetch = () => {
  return useFetch<MainResponse>("/events/home");
};
