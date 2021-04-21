import { Affix } from './affix';
import { ClickOutside } from './click-outside';
import permission from './permission';

export default {
  install(Vue: any) {
    Vue.directive('affix', Affix);
    Vue.directive('permission', permission);
    Vue.directive('click-outside', ClickOutside);
  }
};
