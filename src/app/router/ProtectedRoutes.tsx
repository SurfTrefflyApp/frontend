import { Navigate, Outlet } from "react-router";

interface ProtectedRoutes {
  redirectHref: string;
  redirect: () => boolean;
}

export const ProtectedRoutes = ({
  redirectHref,
  redirect,
}: ProtectedRoutes) => {
  return redirect() ? <Navigate to={redirectHref} replace /> : <Outlet />;
};
