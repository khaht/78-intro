export default {
  bind(el: any, binding: any, vNode: any) {
    el.__vueClickOutside__ = (event: any) => {
      // console.log('test');
      if (!el.contains(event.target)) {
        // call method provided in v-click-outside value
        vNode.context[binding.expression](event);
        // event.stopPropagation();
      }
    };
    document.body.addEventListener('click', el.__vueClickOutside__);
  },
  unbind(el: any, binding: any, vNode: any) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  },
};
