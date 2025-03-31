import { AppLoader } from "@/app/router/AppLoader";
import { PrivateRoutes } from "@/app/router/PrivateRoutes";
import { RouterProvider, createBrowserRouter } from "react-router";

import { Login } from "@/pages/Login";
import { Privacy } from "@/pages/Privacy";
import { Profile } from "@/pages/Profile";
import { Register } from "@/pages/Register";
import { Terms } from "@/pages/Terms";
import { Welcome } from "@/pages/Welcome";

import { routes } from "@/shared/router";

const router = createBrowserRouter([
  {
    element: <AppLoader />,
    children: [
      {
        element: <PrivateRoutes navigateHref="/profile" />,
        children: [
          {
            path: routes.login,
            element: <Login />,
          },
          {
            path: routes.register,
            element: <Register />,
          },
          {
            path: routes.welcome,
            element: <Welcome />,
          },
          {
            path: routes.passwordReset,
            element: <>Reset</>,
          },
        ],
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
      {
        path: routes.main,
        element: <>Main</>,
      },
      {
        path: routes.terms,
        element: <Terms />,
      },
      {
        path: routes.privacy,
        element: <Privacy />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
