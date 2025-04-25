import { useEffect, useState } from "react";

interface Geolocation {
  latitude: null | number;
  longitude: null | number;
  error: null | string;
  isLocationCheckComplete: boolean;
}

const useGeolocation = () => {
  const [state, setState] = useState<Geolocation>({
    latitude: null,
    longitude: null,
    error: null,
    isLocationCheckComplete: false,
  });

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
