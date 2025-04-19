import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  return {
    provide: {
      salamu: (ujumbe: string) => `Hello ${ujumbe}!`,
    },
  };
});
