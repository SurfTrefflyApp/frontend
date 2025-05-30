import { createEffect } from "effector";

export const getUserPositionFx = createEffect<
  void,
  { longitude: number | undefined; latitude: number | undefined }
>(async () => {
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
  } catch (e) {
    console.debug(e);
    return { longitude: undefined, latitude: undefined };
  }
});
