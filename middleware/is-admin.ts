import {
  abortNavigation,
  createError,
  defineNuxtRouteMiddleware,
  useNuxtApp,
} from '#imports';

export default defineNuxtRouteMiddleware(async () => {
  const config = useRuntimeConfig();
  const { ADMIN_EMAIL } = config.public;

  if (useNuxtApp().$auth.user?.email !== ADMIN_EMAIL) {
    if (import.meta.server) {
      return createError({
        statusCode: 401,
        message: 'You must be an admin to access this page',
      });
    }
    return abortNavigation();
  }
});
