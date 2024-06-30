// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      NUXT_KINDE_CLIENT_ID: process.env.NUXT_KINDE_CLIENT_ID,
      NUXT_KINDE_AUTH_DOMAIN: process.env.NUXT_KINDE_AUTH_DOMAIN,
      NUXT_KINDE_REDIRECT_URL: process.env.NUXT_KINDE_REDIRECT_URL,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/kinde',
    '@nuxtjs/google-fonts',
    "@nuxt/eslint"
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Recursive: true,
    },
  },
});