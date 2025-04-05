import { Event } from "@/entities/Event";

import { useFetch } from "@/shared/lib/useFetch";

interface MainResponse {
  new: Event[];
  popular: Event[];
  premium: Event[];
  recommended: Event[];
}

export const useEventsFetch = () => {
  return useFetch<MainResponse>(
    "https://run.mocky.io/v3/317b945e-d979-4f7c-9236-4772e8a8831a",
  );
};
