import { useUnit } from "effector-react";
import { useCallback, useState } from "react";

import { setErrorEvent } from "@/shared/api";

import { SuggestResponseItem, geocodeReverse, suggest } from "../api";
import { geocodeMapper } from "../mapper/geocode";
import { setAddressEvent } from "../model";

export const useSearchController = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestResponseItem[]>([]);

  const setError = useUnit(setErrorEvent);
  const setAddress = useUnit(setAddressEvent);

  const handleSearch = useCallback(
    async (value: string) => {
      if (!value) {
        return;
      }
      setLoading(true);
      try {
        const { data } = await suggest(value);
        setSuggestions(data);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [setError],
  );

  const handleSelect = useCallback(
    async (suggestion: SuggestResponseItem) => {
      setLoading(true);
      try {
        const { data } = await geocodeReverse(suggestion.address);
        const address = geocodeMapper(data);
        setAddress(address);
        setValue("");
        setSuggestions([]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [setAddress, setError],
  );

  return {
    value,
    setValue,
    loading,
    suggestions,
    handleSearch,
    handleSelect,
  };
};
