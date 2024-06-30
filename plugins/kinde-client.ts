import { defineNuxtPlugin } from '#imports';
import { type KindeClient } from '@kinde-oss/kinde-auth-pkce-js';

export default defineNuxtPlugin(async nuxtApp => {
  const kindeClient: KindeClient = await useKindeClient();

  return {
    provide: {
      kindeClient,
    },
  };
});
