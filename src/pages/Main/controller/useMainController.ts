import type { Event } from "@/entities/Event";

import { useCoordsContext } from "@/shared/coords/CoordsContext";
import { useFetch } from "@/shared/lib/useFetch";

interface MainResponse {
  latest: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useMainController = () => {
  const state = useCoordsContext();

  const { data, loading } = useFetch<MainResponse>(
    "/events/home",
    state.isLocationCheckComplete,
  );

  return { data, loading: !state.isLocationCheckComplete || loading };
};
