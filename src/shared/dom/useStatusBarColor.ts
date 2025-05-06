import { useEffect } from "react";

import { setStatusBarColor } from "./setStatusBarColor";

export const useStatusBarColor = (color: string) => {
  useEffect(() => {
    setStatusBarColor(color);
  }, [color]);
};
