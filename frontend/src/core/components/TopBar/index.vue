<template>
  <div class="mt-4 pb-3 flex top-logo">
    <div class="w-2/4 flex flex-col ml-4">
      <img class="img-logo" src="@/assets/images/logo-app.png" alt="logo" />
      <small class="text-small">Trung thực là nền tảng của sự sống còn</small>
    </div>
    <!-- <div class="w-2/4 text-center self-end">
      <img @click="gotoHome" src="@/assets/images/txt-reg.png" class="txt-img" alt="" />
    </div> -->
  </div>
  <!-- <div class="w-full flex">
        <div class="w-1/4 flex box-1 justify-center items-center">
          <span class="text-xs-small py-4">Tất cả khuyến mãi</span>
        </div>
        <div class="w-3/4">
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Khuyến mãi mới</p>
          </div>
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Khuyến mãi chung</p>
          </div>
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Điện tử/Bắn cá/Đá gà</p>
          </div>
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Game bài</p>
          </div>
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Thể thao/Esports</p>
          </div>
          <div class="w-2/6 inline-block text-center">
            <p class="text-small py-1 w-95 border-bot">Live Casino</p>
          </div>
        </div>
      </div> -->
  <!-- <div class="flex w-full">
        <div class="w-1/4 flex justify-center items-center">
          <img src="@/assets/images/icon1.png" class="icon-1 mr-1" alt="" />
          <span class="text-xs text-red-500 py-2">Thông báo: </span>
        </div>
        <div class="w-3/4 flex items-center">
          <marquee width="100%" behavior="scroll">
            <ul class="flex">
              <li class="mx-3 text-xs sm:text-sm float-left item-mq">
                <strong class="text-red-500 pr-1 text-xs">Event</strong>
                <a class="text-red-500 text-xs" href="#" target="_blank">Nội dung thông báo</a>
              </li>
              <li class="mx-3 text-xs sm:text-sm float-left item-mq">
                <strong class="text-red-500 pr-1 text-xs">Event</strong>
                <a class="text-red-500 text-xs" href="#" target="_blank">Nội dung thông báo</a>
              </li>
            </ul>
          </marquee>
        </div>
      </div> -->
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
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
