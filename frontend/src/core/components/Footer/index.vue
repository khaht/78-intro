<template>
  <div class="footer" v-if="device === 'mobile'">
    <ul class="footer-menu">
      <li>
        <a href="https://www.78win01.com/gamelobby/egame" target="_blank">
          <div class="flex">
            <img src="@/assets/images/mobile/7.png" />
            <span>Trò chơi điện tử</span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.78win01.com/gamelobby/chess" target="_blank">
          <div class="flex">
            <img src="@/assets/images/mobile/8.png" />
            <span>Game bài 3D</span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.78win01.com/gamelobby/mpg" target="_blank">
          <div class="flex">
            <img src="@/assets/images/mobile/9.png" />
            <span>Thể loại khác</span>
          </div>
        </a>
      </li>
      <li>
        <a href="https://www.78win01.com/Info/partner" target="_blank">
          <div class="flex">
            <img src="@/assets/images/mobile/10.png" />
            <span>Hợp tác đại lý</span>
          </div>
        </a>
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
  public device!: string;
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
