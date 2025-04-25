import { createContext, useContext } from "react";

export interface Geolocation {
  latitude: null | number;
  longitude: null | number;
  error: null | string;
  isLocationCheckComplete: boolean;
}

export const defaultGeo: Geolocation = {
  latitude: null,
  longitude: null,
  error: null,
  isLocationCheckComplete: false,
};

export const CoordsContext = createContext<Geolocation>(defaultGeo);

export const useCoordsContext = () => useContext(CoordsContext);
