import { useEffect, useRef, useState } from "react";

export const useInterval = (callback: () => void, interval = 1000) => {
  const [active, setActive] = useState(false);
  const intervalIdRef = useRef<ReturnType<typeof setInterval>>(null);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => {
    if (!active) return;

    intervalIdRef.current = setInterval(() => callbackRef.current(), interval);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [active, interval]);

  return {
    active,
    pause: () => setActive(false),
    resume: () => setActive(true),
    toggle: () => setActive((prev) => !prev),
  };
};
