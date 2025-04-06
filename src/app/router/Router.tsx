import { AppLayout } from "@/app/router/AppLayout";
import { AppLoader } from "@/app/router/AppLoader";
import { ErrorPagesProvider } from "@/app/router/ErrorPagesProvider";
import { PrivateRoutes } from "@/app/router/PrivateRoutes";
import { RouterProvider, createBrowserRouter } from "react-router";

import { Event } from "@/pages/Event";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { Privacy } from "@/pages/Privacy";
import { Profile } from "@/pages/Profile";
import { Register } from "@/pages/Register";
import { Terms } from "@/pages/Terms";
import { Timeout } from "@/pages/Timeout";
import { Welcome } from "@/pages/Welcome";

import { routes } from "@/shared/router";

const router = createBrowserRouter([
  {
    element: (
      <ErrorPagesProvider>
        <AppLoader />
      </ErrorPagesProvider>
    ),
    children: [
      {
        element: <PrivateRoutes navigateHref={routes.main} />,
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
        element: <AppLayout />,
        children: [
          {
            path: routes.profile,
            element: <Profile />,
          },
          {
            path: routes.main,
            element: <Main />,
          },
          {
            path: routes.terms,
            element: <Terms />,
          },
          {
            path: routes.privacy,
            element: <Privacy />,
          },
          {
            path: routes.timeout,
            element: <Timeout />,
          },
          {
            path: routes.events,
            element: <>Events</>,
          },
          {
            path: "/myEvents",
            element: <>My events</>,
          },
        ],
      },
      {
        path: routes.event,
        element: <Event />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
