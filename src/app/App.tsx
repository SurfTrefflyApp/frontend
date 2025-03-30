import { RootProvider } from "@/app/providers/RootProvider";
import { RouterProvider, createBrowserRouter } from "react-router";

import { Register } from "@/pages/Register";
import { Terms } from "@/pages/Terms";
import { Welcome } from "@/pages/Welcome";

import { routes } from "@/shared/router";

import "./index.css";

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
    element: <Terms />,
  },
  {
    path: routes.privacy,
    element: <>Privacy</>,
  },
]);

const App = () => (
  <RootProvider>
    <RouterProvider router={router} />
  </RootProvider>
);
export default App;
