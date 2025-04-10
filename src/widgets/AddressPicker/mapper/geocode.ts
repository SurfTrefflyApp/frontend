import { Address } from "@/entities/Address";

import { GeocodeResponse } from "../api";

export function geocodeMapper(data: GeocodeResponse): Address {
  return {
    address: data.address,
    coordinates: [data.lat, data.lon],
  };
}
