import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin(async nuxtApp => {
  const kindeUser = useNuxtApp().$auth.user;

  return {
    provide: {
      kindeUser,
    },
  };
});
