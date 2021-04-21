import Vue from 'vue';

import router from 'router';
import store from 'store';

import App from './App.vue';
import { i18n } from 'locales';
import AppComponents from './plugins/components';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
// import { AuthPlugin } from './plugins/authWrapper';

// // import style
// import 'swiper/css/swiper.css';
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css';

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production';

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = (window as any).Cypress.cy.onUncaughtException;
}
Vue.use(AppComponents);
// Vue.use(AuthPlugin, {});

const app = new Vue({
  el: '#app',

  router,
  store,
  i18n,
  // tslint:disable-next-line:arrow-parens
  render: (h) => h(App),
});

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  (window as any).__app__ = app;
}
