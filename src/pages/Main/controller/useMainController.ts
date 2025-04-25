import type { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";
import useGeolocation from "@/shared/lib/useGeolocation";

interface MainResponse {
  latest: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useMainController = () => {
  const state = useGeolocation();
  console.debug(state);

  const { data, loading } = useFetch<MainResponse>("/events/home");

  return { data, loading };
};
