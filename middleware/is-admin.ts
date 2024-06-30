export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $kindeClient } = useNuxtApp();
  const isAuthenticated = await $kindeClient.isAuthenticated();

  if (!isAuthenticated) {
    return navigateTo('/');
  }

  const userProfile = await $kindeClient.getUserProfile();
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Assume this is defined in your environment variables

  if (userProfile?.email !== ADMIN_EMAIL) {
    return abortNavigation();
  }
});
