import { ErrorProvider } from "@/app/providers/ErrorProvider";
import { AppLoader } from "@/app/router/AppLoader";
import { PrivateRoutes } from "@/app/router/PrivateRoutes";
import { TabbarLayout } from "@/app/router/TabbarLayout";
import { RouterProvider, createBrowserRouter } from "react-router";

import { AdminEvents } from "@/pages/AdminEvents";
import { AdminUsers } from "@/pages/AdminUsers";
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

import { $isAdmin } from "@/shared/auth/model";
import { routes } from "@/shared/router";

import { CoordsProvider } from "../providers/CoordsProvider";
import { AppbarLayout } from "./AppbarLayout";
import { ProtectedRoutes } from "./ProtectedRoutes";

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
      // Admin routes
      {
        element: (
          <ProtectedRoutes
            redirect={() => {
              const isAdmin = $isAdmin.getState();

              return !isAdmin;
            }}
            redirectHref={routes.welcome}
          />
        ),
        children: [
          {
            element: <AppbarLayout />,
            children: [
              {
                element: <TabbarLayout />,
                children: [
                  {
                    path: routes.adminUsers,
                    element: <AdminUsers />,
                  },
                  {
                    path: routes.adminEvents,
                    element: <AdminEvents />,
                  },
                ],
              },
            ],
          },
        ],
      },
      // User routes (admin can't get them)
      {
        element: (
          <ProtectedRoutes
            redirect={() => {
              const isAdmin = $isAdmin.getState();

              return isAdmin;
            }}
            redirectHref={routes.adminEvents}
          />
        ),
        children: [
          {
            element: <AppbarLayout />,
            children: [
              {
                element: (
                  <PrivateRoutes navigateHref={routes.profile} forAuth />
                ),
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
                element: <TabbarLayout />,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
