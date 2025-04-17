import type { VitePWAOptions } from "vite-plugin-pwa";

export const manifest: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: "Treffly",
    short_name: "Treffly",
    description:
      "Web app where every user can look for and create events nearby",
    theme_color: "#faf9f5",
    background_color: "#faf9f5",
    display: "fullscreen",
    icons: [
      {
        src: "/icons/96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/144x144.svg",
        sizes: "144x144",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/profile_screen.jpg",
        sizes: "590x1280",
      },
      {
        src: "/screenshots/profile_screen_desk.png",
        sizes: "2880x1560",
        form_factor: "wide",
      },
    ],
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.destination === "document",
        handler: "NetworkFirst",
        options: {
          cacheName: "html-cache",
        },
      },
      {
        urlPattern: ({ request }) =>
          request.destination === "script" || request.destination === "style",
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "assets-cache",
        },
      },
      {
        urlPattern: ({ request }) => request.destination === "image",
        handler: "CacheFirst",
        options: {
          cacheName: "image-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
        },
      },
    ],
  },
};
