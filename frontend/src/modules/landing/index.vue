<template>
  <div class="px-0 sm:px-40">
    <div class="main-app mx-auto relative">
      <div class="mt-4 pb-3 flex justify-center items-center top-logo">
        <div class="w-2/4 text-center flex justify-center flex-col">
          <img class="img-logo" src="@/assets/images/logo-app.png" alt="logo" />
          <small class="text-small">Trung thực là nền tảng của sự sống còn</small>
        </div>
        <div class="w-2/4 text-center self-end">
          <img src="@/assets/images/txt-reg.png" class="txt-img" alt="" />
        </div>
      </div>
      <div class="w-full flex">
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
      </div>
      <div class="flex w-full">
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
      </div>
      <div class="px-4 sm:px-8 mt-2">
        <div class="section-1 flex">
          <div class="w-8/12">
            <div class="relative bg-1">
              <div class="absolute bg-abs text-center w-full h-full">
                <div class="flex bg-btn items-center justify-center">
                  <el-button class="btn-1"> Chi tiết KM </el-button>
                  <el-button class="btn-2"> Đăng ký KM </el-button>
                </div>
              </div>
            </div>
            <el-row class="mt-3">
              <el-col :span="24">
                <div class="bg-demo bg-only"></div>
              </el-col>
            </el-row>
          </div>
          <div class="w-4/12">
            <div class="w-95 h-full ml-2 relative">
              <div class="box-inf flex flex-col justify-center items-center">
                <img src="@/assets/images/profile.png" class="img-inf mb-1" alt="" />
                <small class="text-small">Trung tâm cá nhân</small>
              </div>
              <div class="box-bot-inf mt-3 bg-only"></div>
            </div>
          </div>
        </div>
        <div class="mt-3 flex">
          <div class="bg-demo box-custom bg-only"></div>
          <div class="bg-demo box-custom bg-only"></div>
          <div class="bg-demo box-custom bg-only"></div>
        </div>
        <div class="mt-3 flex">
          <div class="bg-demo box-custom bg-only"></div>
          <div class="bg-demo box-custom bg-only"></div>
          <div class="bg-demo box-custom bg-only"></div>
        </div>
        <div class="mt-3 flex box-end">
          <div class="bg-demo bg-only"></div>
        </div>
      </div>
      <div class="bar-bot w-full">
        <ul class="w-full">
          <li class="w-1/4 flex flex-col justify-center items-center">
            <img src="@/assets/images/home.png" class="icon-bot" alt="ic" />
            <small class="text-white text-xs">Trang chủ</small>
          </li>
          <li class="w-1/4 flex flex-col justify-center items-center">
            <img src="@/assets/images/cskh.png" class="icon-bot" alt="ic" />
            <small class="text-white text-xs">CSKH 24/7</small>
          </li>
          <li class="w-1/4 flex flex-col justify-center items-center">
            <img src="@/assets/images/taiapp.png" class="icon-bot" alt="ic" />
            <small class="text-white text-xs">Tải app</small>
          </li>
          <li class="w-1/4 flex flex-col justify-center items-center">
            <img src="@/assets/images/tailai.png" class="icon-bot" alt="ic" />
            <small class="text-white text-xs">Tải lại</small>
          </li>
        </ul>
      </div>
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
export default class Landing extends Vue {}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
