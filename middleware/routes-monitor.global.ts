import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`From: ${from.fullPath}`);
  console.log(`To: ${to.fullPath}`);
});
