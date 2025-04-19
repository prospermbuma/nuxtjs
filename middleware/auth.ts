import {
  defineNuxtRouteMiddleware,
  abortNavigation,
  navigateTo,
} from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === "2" || to.params.id === "3") {
    // return abortNavigation();
    return navigateTo("/");

  } else if (to.params.id === "1") {
    return "Admin";
  }
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
