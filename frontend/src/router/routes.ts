import { lazyLoadView } from 'core/utils';
const Home = () => lazyLoadView(import('modules/home/index.vue'));
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      authRequired: false,
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
