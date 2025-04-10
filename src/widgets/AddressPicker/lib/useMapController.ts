import axios from "axios";
import { useUnit } from "effector-react";
import { useCallback, useState } from "react";

import { $address, setAddressEvent } from "../model";

export const useMapController = () => {
  const address = useUnit($address);
  const setAddress = useUnit(setAddressEvent);
  const [coordinates, setCoordinates] = useState(address.coordinates);
  const [isLoading, setIsLoading] = useState(false);

  const handleMapClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (e: any) => {
      const coords = e.get("coords");
      setCoordinates(coords);
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          `https://geocode-maps.yandex.ru/1.x/?apikey=${import.meta.env.VITE_Y_API}&format=json&geocode=${coords[1]},${coords[0]}`,
        );

        const foundAddress: string =
          data.response.GeoObjectCollection.featureMember[0]?.GeoObject
            ?.metaDataProperty?.GeocoderMetaData?.text || "Адрес не определен";
        setAddress({
          address: foundAddress,
          coordinates: [coords[0], coords[1]],
        });
      } catch (error) {
        console.error("Ошибка при получении адреса:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setAddress],
  );

  return {
    coordinates,
    isLoading,
    handleMapClick,
  };
};
