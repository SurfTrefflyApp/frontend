import { Outlet } from "react-router";

export const CoordsProvider = () => {
  // const state = useGeolocation();

  return (
    // <CoordsContext.Provider value={state}>
    <Outlet />
    // </CoordsContext.Provider>
  );
};
