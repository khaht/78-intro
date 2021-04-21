<template>
  <div class="wrapper">
    <div class="main-content">
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </fade-transition>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className: string) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className: string) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import ContentFooter from './ContentFooter.vue';
import MainContent from './Content.vue';
import { FadeTransition } from 'vue2-transitions';

@Component({
  components: {
    ContentFooter,
    MainContent,
    FadeTransition,
  },
  computed: {
    ...mapState('global', ['loading']),
  },
})
export default class Layout extends Vue {
  public loading!: boolean;
}
</script>

<style lang="scss" scoped></style>
