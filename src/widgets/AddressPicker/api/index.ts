import axios from "axios";

import { api } from "@/shared/api";

export interface GeocodeResponse {
  address: string;
  lat: number;
  lon: number;
}

export function geocode(lat: number, lon: number) {
  return api.get<GeocodeResponse>("/geocode", {
    params: {
      lat,
      lon,
    },
  });
}

export interface SuggestResponseItem {
  title: {
    text: string;
  };
  subtitle?: {
    text: string;
  };
}

export interface SuggestResponse {
  results: SuggestResponseItem[];
}

export function suggest(text: string) {
  return axios.get<SuggestResponse>(
    "https://suggest-maps.yandex.ru/v1/suggest?apikey=API_KEY&ll=39.2006,51.6606&spn=0.2,0.2",
    {
      params: {
        text,
      },
    },
  );
}
