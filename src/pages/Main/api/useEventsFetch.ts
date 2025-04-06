import { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";

interface MainResponse {
  new: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useEventsFetch = () => {
  return useFetch<MainResponse>("/events/home");
};
