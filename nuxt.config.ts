// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/public/favicon.ico" }],
  },
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
  ],
  css: [
    "primeicons/primeicons.css",
    "assets/css/main.css",
    // "primevue/resources/themes/aura-light-green/theme.css",
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  build: {
    transpile: ["primevue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/services.ts", "~/plugins/primevue.js"],
  imports: {
    dirs: ["~/components/**"],
  },
});
