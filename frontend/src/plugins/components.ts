import VueMeta from 'vue-meta';
import VueAvatar from 'vue-avatar';
import VueSweetalert2 from 'vue-sweetalert2';
// import VueFloatLabel from 'vue-float-label';
import { StatusIndicator } from 'vue-status-indicator';
import 'vue-status-indicator/dist/vue-status-indicator.css';
import 'flex.box';
import 'animate.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import AppDirectives from 'directives';
import { VuePerfectScrollbar } from 'core/components/index';
// A plugin file where you could register global components used across the app
import GlobalComponents from './GlobalComponents';
import Layout from 'core/layouts/index.vue';

// tslint:disable-next-line: no-var-requires
const lang = require('element-ui/lib/locale/lang/en');
// tslint:disable-next-line: no-var-requires
const locale = require('element-ui/lib/locale');
locale.use(lang);

import 'bulma/css/bulma.min.css';
// import 'sweetalert2/dist/sweetalert2.min.css';

import VueTimeago from 'vue-timeago';

export default {
  // tslint:disable-next-line:no-shadowed-variable
  install(Vue: any, options: any) {
    Vue.use(AppDirectives);
    Vue.use(VueMeta, {
      // The component option name that vue-meta looks for meta info on.
      keyName: 'page',
    });
    Vue.use(GlobalComponents);

    Vue.component('layout', Layout);
    Vue.component('status-indicator', StatusIndicator);
    Vue.component('vue-scroll', VuePerfectScrollbar);
    Vue.component('v-avatar', VueAvatar);

    Vue.use(ElementUI);
    Vue.use(VueSweetalert2);
    // Vue.use(VueFloatLabel);
    Vue.use(VueTimeago as any, {
      name: 'Timeago',
      locale: 'en',
      locales: {
        // vi: require('date-fns/locale/vi')
      },
    });
  },
};
