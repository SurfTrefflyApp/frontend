import { ErrorProvider } from "@/app/providers/ErrorProvider";
import { AppLayout } from "@/app/router/AppLayout";
import { AppLoader } from "@/app/router/AppLoader";
import { PrivateRoutes } from "@/app/router/PrivateRoutes";
import { RouterProvider, createBrowserRouter } from "react-router";

import { Error } from "@/pages/Error";
import { Event } from "@/pages/Event";
import { EventEdit } from "@/pages/EventEdit";
import { EventNew } from "@/pages/EventNew";
import { Events } from "@/pages/Events";
import { EventsSearch } from "@/pages/EventsSearch";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { NotFound } from "@/pages/NotFound";
import { PasswordReset } from "@/pages/PasswordReset";
import { Privacy } from "@/pages/Privacy";
import { Profile } from "@/pages/Profile";
import { Register } from "@/pages/Register";
import { Terms } from "@/pages/Terms";
import { Timeout } from "@/pages/Timeout";
import { Welcome } from "@/pages/Welcome";

import { routes } from "@/shared/router";

import { CoordsProvider } from "../providers/CoordsProvider";
import { AppbarLayout } from "./AppbarLayout";

const router = createBrowserRouter([
  {
    element: (
      <ErrorProvider>
        <AppLoader />
      </ErrorProvider>
    ),
    errorElement: <Error />,
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
            element: <PasswordReset />,
          },
        ],
      },
      {
        path: routes.timeout,
        element: <Timeout />,
      },
      {
        element: <AppbarLayout />,
        children: [
          {
            element: <PrivateRoutes navigateHref={routes.profile} forAuth />,
            children: [
              {
                path: routes.eventNew,
                element: <EventNew />,
              },
              {
                path: routes.eventEdit,
                element: <EventEdit />,
              },
            ],
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
            element: <AppLayout />,
            children: [
              {
                element: <CoordsProvider />,
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
                    path: routes.eventsSearch,
                    element: <EventsSearch />,
                  },
                ],
              },
              {
                element: (
                  <PrivateRoutes navigateHref={routes.profile} forAuth />
                ),
                children: [
                  {
                    path: routes.events,
                    element: <Events />,
                  },
                ],
              },
            ],
          },
          {
            path: routes.event,
            element: <Event />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
