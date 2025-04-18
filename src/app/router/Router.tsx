import { ErrorPagesProvider } from "@/app/providers/ErrorPagesProvider";
import { AppLayout } from "@/app/router/AppLayout";
import { AppLoader } from "@/app/router/AppLoader";
import { PrivateRoutes } from "@/app/router/PrivateRoutes";
import { RouterProvider, createBrowserRouter } from "react-router";

import { Error } from "@/pages/Error";
import { Event } from "@/pages/Event";
import { EventNew } from "@/pages/EventNew";
import { EventsSearch } from "@/pages/EventsSearch";
import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { NotFound } from "@/pages/NotFound";
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
            element: <>Reset</>,
          },
        ],
      },
      {
        element: <PrivateRoutes navigateHref={routes.profile} forAuth />,
        children: [
          {
            path: routes.eventNew,
            element: <EventNew />,
          },
          {
            path: routes.eventEdit,
            element: <>Edit Event</>,
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
            path: routes.eventsSearch,
            element: <EventsSearch />,
          },
        ],
      },
      {
        path: routes.event,
        element: <Event />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
