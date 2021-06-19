<template>
  <div class="home">
    <section class="section1">
      <div class="bg"></div>
      <div class="container">
        <div class="mobile-qc pt-5" v-if="device==='mobile'">
          <img src="@/assets/images/mobile/3.png">
        </div>
        <div class="first-qc">
          <div class="flex">
            <div class="img-1">
              <img src="@/assets/images/icons/10.png">
            </div>
            <div class="img-2">
              <img src="@/assets/images/icons/9.png">
            </div>
            <div class="img-3">
              <img src="@/assets/images/icons/11.png">
            </div>
          </div>
          <div class="text">
            <img src="@/assets/images/icons/8.png">
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="container">
        <div class="wrap-qc">
          <div class="qc">
            <div class="img-1">
              <img src="@/assets/images/icons/12.png">
            </div>
            <div class="img-2" v-if="device!=='mobile'">
              <img src="@/assets/images/icons/qrcode2.png">
            </div>
            <div class="img-3" v-if="device!=='mobile'">
              <img src="@/assets/images/icons/13.png">
              <img src="@/assets/images/icons/14.png">
            </div>
          </div>
          <div class="flex" v-if="device==='mobile'">
            <div>
              <img src="@/assets/images/icons/14.png">
            </div>
            <div>
              <img src="@/assets/images/icons/13.png">
            </div>
          </div>
          <div class="text1">
            <img src="@/assets/images/icons/15.png">
          </div>
          <div class="wrap-frame">
            <div class="frame mt-5">
              <div class="left left1">
                <img src="@/assets/images/icons/absolute1.png">
              </div>
              <div class="center">
                <div class="content tab">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane name="one">
                      <span slot="label"><img class="mr-3" src="@/assets/images/icons/38.png">Đăng nhập/đăng ký</span>
                      <div class="detail login">
                        <div class="flex justify-center align-center">
                          <el-col :span="12" class="hidden-xs">
                            <div class="pt-3"></div>
                          </el-col>
                          <el-col :span="12">
                            <div class="flex flex-col justify-center align-center">
                              <img class="mb-3 login-btn" src="@/assets/images/icons/39.png">
                              <img class="mb-3 login-btn" src="@/assets/images/icons/40.png">
                            </div>
                          </el-col>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane name="two">
                      <span slot="label"><img class="mr-3" src="@/assets/images/icons/17.png">Khuyễn mãi HOT</span>
                      <div class="detail">
                        <div>
                          <div class="km" v-for="item in 16" :key="item">
                            <a src="">(Khuyến mãi hot)</a><span> Tài khoản thành viên khi tham gia cá cược...</span>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane name="three">
                      <span slot="label"><img class="mr-3" src="@/assets/images/icons/18.png">Bảng xếp hạng</span>
                      <div class="detail green">
                        <div class="bxh-logo">
                          <img class="logo" src="@/assets/images/icons/logo2.png">
                        </div>
                        <el-row>
                          <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
                          <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
                        </el-row>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </div>
              <div class="right right1">
                <img src="@/assets/images/icons/absolute2.png">
              </div>
            </div>
          </div>
          <div class="big-space"></div>
          <div class="text2 big-margin">
            <img src="@/assets/images/icons/19.png">
          </div>
          <div class="wrap-frame">
            <div class="frame mt-5">
              <div class="left left2">
                <img src="@/assets/images/icons/absolute3.png">
              </div>
              <div class="center">
                <div class="content">
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/game1.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/game2.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/game3.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/game4.jpg">
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
              <div class="right right2">
                <img src="@/assets/images/icons/absolute4.png">
              </div>
            </div>
          </div>
          <div class="big-space"></div>
          <div class="text2 big-margin">
            <img src="@/assets/images/icons/21.png">
          </div>
          <div class="wrap-frame">
            <div class="frame mt-5">
              <div class="left left3">
                <img src="@/assets/images/icons/absolute5.png">
              </div>
              <div class="center">
                <div class="content">
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/slide1.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/slide2.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/slide3.jpg">
                      </div>
                    </el-carousel-item>
                    <el-carousel-item>
                      <div class="wrap-image">
                        <img src="@/assets/images/slider/slide4.jpg">
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
              <div class="right right3">
                <img src="@/assets/images/icons/absolute6.png">
              </div>
            </div>
          </div>
          <div class="big-space"></div>
        </div>
      </div>
      <div class="big-space"></div>
    </section>
  </div>
</template>

<script lang="ts">

import Component from 'vue-class-component';
import {Vue} from 'vue-property-decorator';
import {mapGetters, mapActions} from 'vuex';

@Component({
  components: {},
  computed: {
    ...mapGetters('home', ['device', 'news', 'notices']),
  },
  methods: {
    ...mapActions('home', ['actGet78winPromoCenter']),
  },
})

export default class Home2 extends Vue {
  public loading: boolean = true;
  public activeName: string = 'one';
  public actGet78winPromoCenter!: () => Promise<any>;

  public created() {

  }

  public handleClick(tab: any, event: any) {
    console.log(tab, event);
  }
}

</script>

<style>

</style>