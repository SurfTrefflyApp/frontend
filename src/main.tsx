import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";
import { initResponseInterceptors } from "./shared/api/interceptors/response.ts";
import { startApp } from "./shared/auth";

initResponseInterceptors();
startApp();

createRoot(document.getElementById("root")!).render(<App />);
