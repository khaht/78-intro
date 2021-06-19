<template>
  <div class="top-bar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/1.png"> <span>Trò chơi điện tử</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/2.png"> <span>Game bài 3D</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/3.png"> <span>Thể loại khác</span></router-link>
        </li>
        <li class="flex flex-col center">
          <router-link to="/">
            <img class="logo" src="@/assets/images/logo-app.png">
          </router-link>
          <h1 class="slogan">Trung thực là nền tảng của sự sống còn</h1>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/4.png"> <span>Hợp tác đại lý</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/5.png"> <span>CSKH online</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><img src="@/assets/images/icons/6.png"> <span>Truy cập trang web</span></router-link>
        </li>
        <li v-if="device==='mobile'" class="flex-1">
        </li>
        <li v-if="device==='mobile'">
          <router-link to="/"><img src="@/assets/images/mobile/1.png"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';
import router from 'router';
import {mapGetters} from 'vuex';

@Component({
  components: {},
  computed: {
    ...mapGetters('home', ['device']),
  },
})
export default class Landing extends Vue {
  public gotoHome() {
    router.push({path: '/'});
  }
}
</script>

<style lang="sass" scoped>
@import 'index.sass'
</style>
