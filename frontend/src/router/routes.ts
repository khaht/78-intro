import { lazyLoadView } from 'core/utils';

const Promotion = () => lazyLoadView(import('modules/promotion/index.vue'));
const Profile = () => lazyLoadView(import('modules/profile/index.vue'));
const Login = () => lazyLoadView(import('modules/auth/index.vue'));
const Home = () => lazyLoadView(import('modules/home/index.vue'));
export default [
  {
    path: '/promotion',
    name: 'promotion',
    component: Promotion,
    meta: {
      authRequired: true,
      hideFooter: false,
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      authRequired: true,
      hideFooter: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      authRequired: false,
      hideFooter: false,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      authRequired: true,
      hideFooter: false,
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('modules/pages/views/404.vue').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
];
