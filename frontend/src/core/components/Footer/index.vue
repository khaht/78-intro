<template>
  <div class="bar-bot w-full">
    <ul class="w-full">
      <li @click="gotoHome" class="w-1/4 flex flex-col justify-center items-center">
        <img src="@/assets/images/home.png" class="icon-bot" alt="ic" />
        <small class="text-white text-xs">Trang chủ</small>
      </li>
      <li
        @click="redirectExternalLink('https://direct.lc.chat/12600750/')"
        class="w-1/4 flex flex-col justify-center items-center"
      >
        <img src="@/assets/images/cskh.png" class="icon-bot" alt="ic" />
        <small class="text-white text-xs">CSKH 24/7</small>
      </li>
      <li
        @click="redirectExternalLink('http://www.78win.vn/download')"
        class="w-1/4 flex flex-col justify-center items-center"
      >
        <img src="@/assets/images/taiapp.png" class="icon-bot" alt="ic" />
        <small class="text-white text-xs">Tải app</small>
      </li>
      <li @click="gotoProfile" class="w-1/4 flex flex-col justify-center items-center">
        <img src="@/assets/images/icon-user.png" class="icon-bot" alt="ic" />
        <small class="text-white text-xs">Tài khoản của tôi</small>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import router from 'router';
import { mapGetters } from 'vuex';

@Component({
  components: {},
  computed: {
    ...mapGetters('home', ['device']),
  },
})
export default class Landing extends Vue {
  public gotoProfile() {
    router.push({ path: '/profile' });
  }
  public gotoHome() {
    router.push({ path: '/' });
  }
  public redirectExternalLink(link: string) {
    window.open(link, '_blank');
  }
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
