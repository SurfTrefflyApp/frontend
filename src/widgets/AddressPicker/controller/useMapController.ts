import { useUnit } from "effector-react";
import { useCallback, useState } from "react";

import { setErrorEvent } from "@/shared/api";

import { geocode } from "../api";
import { geocodeMapper } from "../mapper/geocode";
import { $address, setAddressEvent } from "../model";

export const useMapController = () => {
  const address = useUnit($address);
  const setAddress = useUnit(setAddressEvent);
  const setError = useUnit(setErrorEvent);

  const [isLoading, setIsLoading] = useState(false);

  const handleMapClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (e: any) => {
      const coords = e.get("coords");
      setIsLoading(true);

      try {
        const { data } = await geocode(coords[0], coords[1]);
        const address = geocodeMapper(data);
        setAddress(address);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setAddress, setError],
  );

  return {
    coordinates: address.coordinates,
    isLoading,
    handleMapClick,
  };
};
