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
