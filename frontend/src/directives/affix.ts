import { VNode } from 'vue';

export const Affix = {
  data: {
    parent: window,
    parentIsWin: true,
    boundary: null,
    delay: 0,
    offset: 0,
    enable: true,
    default: {
      position: '',
      top: '',
      left: '',
      width: '',
      height: ''
    }
  },

  handleScroll() {
    const that: any = this;
    const scrollTop = that.def.data.parentIsWin ? window.pageYOffset : that.def.data.parent.scrollTop;
    const parentTop = that.def.data.parentIsWin ? 0 : that.def.data.parent.getBoundingClientRect().top;
    const defaultTop = that.def.data.default.top;
    const defaultHeight = that.def.data.default.height;
    const offset = that.def.data.offset;

    that.def.setEnable(that.value);
    that.def.setDefault(that.el, true);

    if (scrollTop + parentTop + offset >= defaultTop && that.def.data.enable) {
      that.el.classList.add('affix');
      that.el.style.position = 'fixed';
      that.el.style.top = parentTop + offset + 'px';
      that.el.style.left = that.def.data.default.left + 'px';
      that.el.style.width = that.def.data.default.width + 'px';
      that.el.style.height = that.def.data.default.height + 'px';

      if (that.def.data.boundary) {
        const boundaryRect = that.def.data.boundary.getBoundingClientRect();

        if (boundaryRect.height + boundaryRect.y - parentTop - offset <= defaultHeight) {
          that.el.style.position = 'absolute';
          that.el.style.top = boundaryRect.height - defaultHeight + 'px';
          that.el.style.left = '0px';
          that.el.classList.add('inbound');
        } else {
          that.el.classList.remove('inbound');
        }
      }

    } else {
      that.el.classList.remove('affix');
      that.el.style.position = '';
      that.el.style.top = null;
      that.el.style.left = null;
      that.el.style.width = null;
      that.el.style.height = null;
    }
  },

  setDefault(el: any, update: any) {
    if (update) {
      this.data.default.left = el.style.left || el.getBoundingClientRect().left;
      this.data.default.width = el.style.width || el.getBoundingClientRect().width;
    } else {
      this.data.default = {
        position: el.style.position,
        top: el.style.top || el.getBoundingClientRect().top,
        left: el.style.left || el.getBoundingClientRect().left,
        width: el.style.width || el.getBoundingClientRect().width,
        height: el.style.height || el.getBoundingClientRect().height
      };
    }
  },

  setEnable(value: any) {
    this.data.enable = value.enable();
  },

  inserted(el: Element, binding: any, vnode: VNode) {
    if (binding.value.delay) {
      binding.def.data.delay = binding.value.delay;
    }
    if (binding.value.offset) {
      binding.def.data.offset = binding.value.offset;
    }
    if (binding.value.boundaryid) {
      binding.def.data.boundary = window.document.getElementById(binding.value.boundaryid);
    }
    if (binding.value.parentid) {
      binding.def.data.parent = window.document.getElementById(binding.value.parentid);
      binding.def.data.parentIsWin = false;
    }

    setTimeout(() => {
      binding.def.setEnable(binding.value);
      binding.def.setDefault(el);

      // tslint:disable-next-line:max-line-length
      binding.def.data.parent.addEventListener('scroll', binding.def.handleScroll.bind({ el, def: binding.def, value: binding.value }));
      // tslint:disable-next-line:max-line-length
      binding.def.data.parent.addEventListener('resize', binding.def.handleScroll.bind({ el, def: binding.def, value: binding.value }));

    }, binding.def.data.delay);
  },

  unbind(el: Element, binding: any, vnode: VNode) {
    // tslint:disable-next-line:max-line-length
    binding.def.data.parent.removeEventListener('scroll', binding.def.handleScroll.bind({ el, def: binding.def, value: binding.value }));
    // tslint:disable-next-line:max-line-length
    binding.def.data.parent.removeEventListener('resize', binding.def.handleScroll.bind({ el, def: binding.def, value: binding.value }));
  }
};
