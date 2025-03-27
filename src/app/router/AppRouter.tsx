import { RouterProvider, createBrowserRouter } from 'react-router';

import { Register } from '@/pages/Register';
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
    element: <Register />,
  },
  {
    path: routes.terms,
    element: <>Terms</>,
  },
  {
    path: routes.privacy,
    element: <>Privacy</>,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
