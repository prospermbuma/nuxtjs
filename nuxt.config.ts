// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/main.scss",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: true,
  imports: {
    dirs: ['composables'], // if you're using custom composables
  }
});
