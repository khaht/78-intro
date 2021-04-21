<template>
  <div v-if="$route.fullPath !== '/404'" class="h-full">
    <div>
      <router-view :class="device" :key="$route.fullPath" />
    </div>
  </div>
  <div v-else>
    <router-view :class="device" :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import appConfig from './app.config.json';
import router from 'router';
import { mapActions, mapGetters } from 'vuex';

@Component({
  components: {},
  methods: {
    ...mapActions('home', ['setDevice']),
  },
  computed: {},
})
export default class App extends Vue {
  public setDevice!: any;
  public device: string = 'desktop';

  public page: any = {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title: any) {
      title = typeof title === 'function' ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  };
  public mounted() {
    this.checkDevice();
  }
  public goHome() {
    router.push({ path: '/' });
  }
  public checkDevice() {
    const w = window.innerWidth;
    const h = window.innerWidth;

    if (w < 768) {
      this.device = 'mobile';
    } else {
      if (w <= 1024) {
        this.device = 'tablet';
      } else {
        // if (w <= 1366) {
        //   this.device = 'laptop';
        // } else {
        this.device = 'desktop';
        // }
      }
    }

    this.setDevice({ device: this.device, screenSize: { w, h } });
  }

  public created() {
    window.addEventListener('resize', this.checkDevice);
  }

  public beforeDestroy() {
    window.removeEventListener('resize', this.checkDevice);
  }
}
</script>

<style lang="scss">
@import '~nprogress/nprogress.css';
@import '~@/assets/scss/style.scss';
</style>
