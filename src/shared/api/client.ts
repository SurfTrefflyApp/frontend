import axios from "axios";

import { init } from "@/shared/api/interceptors";

export const api = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

init();
