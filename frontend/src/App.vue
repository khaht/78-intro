<template>
  <div v-if="$route.fullPath !== '/404'" class="h-full">
    <div class="px-0 sm:px-40">
      <div class="main-app mx-auto relative">
        <top-bar />
        <router-view :class="device" :key="$route.fullPath" />
        <template v-if="$route.fullPath !== '/login'">
          <footer-bar />
        </template>
      </div>
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
import { mapActions } from 'vuex';
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
.text-small {
  font-size: 9px;
  color: #cfaa80;
}
.text-xs-small {
  font-size: 10px;
  color: white;
}
.top-logo {
  box-shadow: 0px 3px 3px -1px #ccc;
}
.img-logo {
  width: 140px;
}
.txt-img {
  width: 200px;
}
.box-custom {
  width: 33% !important;
  margin-right: 1.5%;
  &:last-child {
    margin-right: 0;
  }
}
.box-end {
  padding-bottom: 7rem;
}
.box-1 {
  background-color: #cfaa80;
}
.txt-reg {
  font-size: 20px;
  font-weight: bold;
  font-family: inherit;
  word-spacing: 0px;
  color: #7e3653;
}
.bar-bot {
  position: fixed;
  background: rgb(144, 18, 66);
  background: linear-gradient(60deg, rgba(144, 18, 66, 1) 0%, rgba(107, 13, 49, 1) 35%, rgba(75, 9, 36, 1) 100%);
  width: 100%;
  bottom: 0;
  z-index: 9999;
  li {
    float: left;
    border-right: solid 1px #fff;
    padding: 1rem 0;
    font-weight: 600;
    &:last-child {
      border-right: 0;
    }
    img {
      width: 30px;
      height: 35px;
      object-fit: contain;
      margin-bottom: 5px;
    }
  }
}
.w-95 {
  width: 95%;
}
.border-bot {
  border-bottom: solid 1px #cfaa80;
}
.text-red-500 {
  color: #7e3653 !important;
}
.icon-1 {
  width: 12px;
}
.bg-1 {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  background-image: linear-gradient(to top, #efcbfe 0%, #d576f8 100%);
}
.bg-btn {
  margin-top: 10rem;
}
.bg-abs {
  background-color: #1a202c75;
  border-radius: 10px;
}
.btn-1,
.btn-2 {
  font-size: 10px;
  color: #fff;
  background-color: #cfaa80;
  border-radius: 10px;
  padding: 10px 15px;
  border: none;
}
.box-inf {
  height: 110px;
  box-shadow: 0px 0px 6px 1px #cccccca3;
  border-radius: 35px;
}
.img-inf {
  width: 70px;
  height: auto;
}
.ml-10\/12 {
  margin-left: 12%;
}
.bg-only {
  border-radius: 10px;
  background-image: linear-gradient(to top, #efcbfe 0%, #d576f8 100%);
}
.bg-demo {
  width: 100%;
  height: 110px;
}
.box-bot-inf {
  height: 220px;
}
.main-app {
  width: 100%;
}
@media screen and (min-width: 640px) {
  .bar-bot {
    position: absolute;
  }
  .main-app {
    width: 445px;
  }
}
@media screen and (max-width: 375px) {
  .text-small {
    font-size: 8px;
  }
  .text-xs-small {
    font-size: 9px;
  }
  .txt-img {
    width: 150px;
  }
}
@media screen and (max-width: 320px) {
  .text-xs-small {
    font-size: 8px;
  }
}
</style>
