import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",

      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        lang: "en",
        name: "Fancy Counter",
        short_name: "counter",
        display: "fullscreen",
        orientation: "portrait",
        theme_color: "#bef227",
        background_color: "#212900",
        description:
          "A fancy counter, the first project in bytgrad next.js and react course.",
        icons: [
          {
            src: "vite-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "vite-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "vite-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "vite-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "wide-screenshot.png",
            form_factor: "wide",
            sizes: "1920x1080",
          },
          {
            src: "narrow-screenshot.png",
            form_factor: "narrow",
            sizes: "450x954",
          },
        ],
      },
    }),
  ],
  base: "/fancy-counter",
});
