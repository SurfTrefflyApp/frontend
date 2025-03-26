import { RouterProvider, createBrowserRouter } from 'react-router';

import { Button } from '@/shared/ui/button';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
        <div className="flex justify-center items-center gap-2">
          <Button>-</Button>
          <Button>+</Button>
        </div>
      </div>
    ),
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
