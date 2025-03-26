import { RouterProvider, createBrowserRouter } from 'react-router';

import { Welcome } from '@/pages/Welcome';

import { routes } from '@/shared/router';

const router = createBrowserRouter([
  {
    path: routes.welcome,
    element: <Welcome />,
  },
  {
    path: routes.main,
    element: <>Main</>,
  },
  {
    path: routes.login,
    element: <>Login</>,
  },
  {
    path: routes.register,
    element: <>Register</>,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
