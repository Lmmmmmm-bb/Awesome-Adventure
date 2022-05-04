import { defineNuxtPlugin } from '#app';
import { ElLoading } from 'element-plus';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loading', ElLoading.directive);
});
