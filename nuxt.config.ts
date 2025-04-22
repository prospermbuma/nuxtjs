// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
// import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    rootId: '_salamu',
    // SEO
    head: {
      title: "Salamu TZ",
      meta: [
        {
          name: "description",
          content: "Salamu Tanzania App",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          name: "keywords",
          content: "Salamu, Tanzania",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    // "@": resolve(__dirname, "/"),
    "@": "/<rootDir>",
    assets: "/<rootDir>/assets",
    public: "/<rootDir>/public",
  },
  css: ["~/assets/css/main.css", "~/assets/css/main.scss"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: true,
  imports: {
    dirs: ["composables"], // if you're using custom composables
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
});
