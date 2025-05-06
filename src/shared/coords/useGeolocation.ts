import { useEffect, useState } from "react";

import { type Geolocation, defaultGeo } from "./CoordsContext";

const useGeolocation = () => {
  const [state, setState] = useState<Geolocation>(defaultGeo);

  useEffect(() => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: "Геолокация не поддерживается браузером",
        isLocationCheckComplete: true,
      }));
      return;
    }

    const successHandler = (position: {
      coords: { latitude: number; longitude: number };
    }) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        isLocationCheckComplete: true,
      });
    };

    const errorHandler = (error: unknown) => {
      console.debug(error);
      setState((prev) => ({
        ...prev,
        error: "Произошла ошибка при получении позиции",
        isLocationCheckComplete: true,
      }));
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  return state;
};

export default useGeolocation;
