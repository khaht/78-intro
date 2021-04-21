import { Input, Tooltip, Popover } from 'element-ui';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue: any) {
    Vue.component(Input.name, Input);
    Vue.use(Tooltip);
    Vue.use(Popover);
  },
};

export default GlobalComponents;
