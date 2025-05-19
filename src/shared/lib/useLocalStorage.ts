import { useEffect, useState } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved) as T;
    } catch {
      return defaultValue;
    }
  }
  return defaultValue;
}

type UseLocalStorageReturn<T> = [
  T,
  (value: T | ((prevValue: T) => T)) => void,
  () => void,
];

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): UseLocalStorageReturn<T> => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const clear = () => {
    localStorage.removeItem(key);
  };

  return [value, setValue, clear];
};
