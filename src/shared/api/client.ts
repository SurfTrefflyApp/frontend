import axios from "axios";

import { initResponseInterceptors } from "@/shared/api/interceptors/response";

export const api = axios.create({
  baseURL: "/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

initResponseInterceptors();
