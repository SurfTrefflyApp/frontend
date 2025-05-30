export interface Coords {
  longitude: number | undefined;
  latitude: number | undefined;
}

export const getUserPosition = async (): Promise<Coords> => {
  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          maximumAge: Infinity,
        });
      },
    );
    return {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
  } catch {
    return { longitude: undefined, latitude: undefined };
  }
};
