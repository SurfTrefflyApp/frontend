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

export function geocodeReverse(address: string) {
  return api.get<GeocodeResponse>("/reverse-geocode", {
    params: {
      address,
    },
  });
}

export interface SuggestResponseItem {
  id: number;
  title: string;
  address: string;
}

export function suggest(text: string) {
  return api.get<SuggestResponseItem[]>("/suggest/addresses", {
    params: {
      text,
    },
  });
}
