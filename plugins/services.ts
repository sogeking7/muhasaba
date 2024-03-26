import { defineNuxtPlugin } from "#app";
import axios from "axios";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  const api_url = nuxtApp.$config.public.API_URL + "/";
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: api_url,
    headers: {
      common: {},
    },
  });

  if (token) {
    // @ts-ignore
    api.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });
  }

  nuxtApp.vueApp.use(ToastService);

  return {
    provide: {
      axios: api,
    },
  };
});
