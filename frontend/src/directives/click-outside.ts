export const ClickOutside = {
  bind(el: any, binding: any, vnode: any) {
    // tslint:disable-next-line:only-arrow-functions
    el.clickOutsideEvent = function(event: any) {
      // here I check that click was outside the el and his childrens
      // tslint:disable-next-line:triple-equals
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};
