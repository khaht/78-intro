<template>
  <div v-if="$route.fullPath !== '/404'" class="h-full">
    <top-bar />
    <router-view :class="device" :key="$route.fullPath" />
    <template v-if="$route.fullPath !== '/login'">
      <footer-bar />
    </template>
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
import TopBar from 'core/components/TopBar/index.vue';
import FooterBar from 'core/components/Footer/index.vue';

@Component({
  components: {
    TopBar,
    FooterBar,
  },
  methods: {
    ...mapActions('home', ['setDevice']),
  },
  computed: {
    ...mapGetters('home', ['device']),
  },
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

<style lang="sass">
@import '~nprogress/nprogress.css'
@import '~@/assets/sass/style.sass'
</style>
