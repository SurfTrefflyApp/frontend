import { RootProvider } from "@/app/providers/RootProvider";
import { Router } from "@/app/router/Router";

import "./index.css";

const App = () => (
  <RootProvider>
    <Router />
  </RootProvider>
);
export default App;
