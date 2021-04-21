import Vue from 'vue';
import Router from 'vue-router';
// import NProgress from 'nprogress';
import store from 'store';
import routes from './routes';
import { loadLanguageAsync } from 'locales';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  routes,
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// 1. Set default language
// 2. Start progress
// 3. Check Auth
router.beforeEach(async (to, from, next) => {
  const lang = to.params.lang || 'en';
  await loadLanguageAsync(lang);

  document.title = to.meta.title || '78win';
  const isLoginPage = to.matched.some(
    (p: any) => p.path.indexOf('login') === 0,
  );
  try {
    const isAuthenticated = store.getters['auth/isAuthenticated'];
    const requiresAuth = to.matched.some((r: any) => r.meta.authRequired);
    if (isAuthenticated && isLoginPage) {
      return next();
    }

    if (requiresAuth && !isAuthenticated) {
      if (isLoginPage) {
        return next();
      }
      return next('login');
    } else {
      next();
    }
  } catch (err) {
    if (isLoginPage) {
      return next();
    }
    next('login');
  }
});
export default router;
