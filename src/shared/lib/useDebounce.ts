import { useEffect, useState } from "react";

export const useDebounceInput = (
  value: string,
  delay: number,
  callback?: (debounceValue: string) => unknown,
) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  useEffect(() => {
    callback?.(debounceValue);
  }, [debounceValue, callback]);

  return debounceValue;
};
