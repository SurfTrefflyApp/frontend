import { Outlet } from "react-router";

import { CoordsContext } from "@/shared/coords/CoordsContext";
import useGeolocation from "@/shared/coords/useGeolocation";

export const CoordsProvider = () => {
  const state = useGeolocation();

  console.debug(state);

  return (
    <CoordsContext.Provider value={state}>
      <Outlet />
    </CoordsContext.Provider>
  );
};
