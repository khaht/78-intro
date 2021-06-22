<template>
  <div class="top-bar hidden md:block">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a href="https://www.78win01.com/gamelobby/egame" target="_blank"
            ><img src="@/assets/images/icons/1.png" /> <span>Trò chơi điện tử</span></a
          >
        </li>
        <li class="nav-item">
          <a href="https://www.78win01.com/gamelobby/chess" target="_blank"
            ><img src="@/assets/images/icons/2.png" /> <span>Game bài 3D</span></a
          >
        </li>
        <li class="nav-item">
          <a href="https://www.78win01.com/gamelobby/mpg" target="_blank"
            ><img src="@/assets/images/icons/3.png" /> <span>Thể loại khác</span></a
          >
        </li>
        <li class="flex flex-col center">
          <a href="/" target="_blank">
            <img class="logo" src="@/assets/images/logo-app.png" />
          </a>
          <h1 class="slogan">Trung thực là nền tảng của sự sống còn</h1>
        </li>
        <li class="nav-item">
          <a href="https://www.78win01.com/Info/partner" target="_blank"
            ><img src="@/assets/images/icons/4.png" /> <span>Hợp tác đại lý</span></a
          >
        </li>
        <li class="nav-item">
          <a href="https://direct.lc.chat/12600750/" target="_blank"
            ><img src="@/assets/images/icons/6.png" /> <span>CSKH online</span></a
          >
        </li>
        <li class="nav-item">
          <a href="https://www.78win01.com/?uagt=78wincoccoc01&path=signup" target="_blank"
            ><img src="@/assets/images/icons/5.png" /> <span>Truy cập trang web</span></a
          >
        </li>
      </ul>
    </div>
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
  public gotoHome() {
    router.push({ path: '/' });
  }
  public redirectExternal(link: string) {
    window.open(link, '_blank');
  }
}
</script>

<style lang="sass" scoped>
@import 'index.sass'
</style>
