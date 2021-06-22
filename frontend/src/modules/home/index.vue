<template>
  <div class="home">
    <section class="section1">
      <!-- <div class="bg"></div> -->
      <div class="container">
        <div class="mobile-qc pt-5" v-if="device === 'mobile'">
          <img src="@/assets/images/mobile/3.png" />
        </div>
        <div class="first-qc">
          <div class="flex">
            <div class="img-1">
              <img src="@/assets/images/icons/10.png" />
            </div>
            <div class="img-2">
              <img class="cursor-pointer" src="@/assets/images/icons/9.png" />
            </div>
            <div class="img-3">
              <img class="cursor-pointer" src="@/assets/images/icons/11.png" />
            </div>
          </div>
          <div class="text">
            <img class="w-3/5" src="@/assets/images/icons/8.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="container">
        <div class="wrap-qc">
          <div class="btn-zone mt-3 mb-6 flex justify-around items-center">
            <img
              class="cursor-pointer"
              @click="redirectExternal('http://78win.vn/download')"
              src="@/assets/images/btn-download.png"
            />
            <img
              class="cursor-pointer"
              @click="redirectExternal('https://www.78win01.com/?uagt=78wincoccoc01&path=signup')"
              src="@/assets/images/btn-access.png"
            />
          </div>
          <div class="zone-1">
            <div class="text1">
              <img class="mx-auto w-4/5" src="@/assets/images/icons/15.png" />
            </div>
            <div class="wrap-frame">
              <div class="frame mt-5 frame-custom">
                <div class="left left1">
                  <img src="@/assets/images/icons/absolute1.png" />
                </div>
                <div class="center">
                  <div class="content tab">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane name="one">
                        <span slot="label"
                          ><img class="mr-3" src="@/assets/images/icons/38.png" />Đăng nhập/đăng ký</span
                        >
                        <div class="detail login">
                          <div class="flex justify-center align-center h-full">
                            <el-col :span="12">
                              <div class="pt-3"></div>
                            </el-col>
                            <el-col :span="12">
                              <div class="flex flex-col justify-center items-center">
                                <img
                                  @click="redirectExternal('http://783478.com/')"
                                  class="mb-6 opacity-70 hover:opacity-100 login-btn cursor-pointer"
                                  src="@/assets/images/icons/39.png"
                                />
                                <img
                                  @click="redirectExternal('http://783478.com/')"
                                  class="login-btn opacity-70 hover:opacity-100 cursor-pointer"
                                  src="@/assets/images/icons/40.png"
                                />
                              </div>
                            </el-col>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane name="two">
                        <span slot="label"><img class="mr-3" src="@/assets/images/icons/17.png" />Khuyến mãi HOT</span>
                        <div class="detail detail-km">
                          <div class="scroll">
                            <div class="mb-1" v-for="(item, idx) in promotions" :key="item">
                              <a
                                class="item-km text-base flex pl-12 items-center"
                                href="https://www.78win01.com/promotions"
                                target="_blank"
                                ><span class="text-red-700 font-bold">[Khuyến mãi {{ idx + 1 }}] </span
                                ><span class="truncate txt-km ml-1">{{ item }}</span></a
                              >
                            </div>
                          </div>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane name="three">
                        <span slot="label"><img class="mr-3" src="@/assets/images/icons/18.png" />Bảng xếp hạng</span>
                        <div class="detail green">
                          <div class="bxh-logo">
                            <img class="logo" src="@/assets/images/icons/logo2.png" />
                            <el-row class="pt-2 flex">
                              <el-col :span="12" class="top-frame">
                                <div class="wrap-top">
                                  <div class="top top1">
                                    <div class="absolute">
                                      <div class="img">
                                        <img class="avatar" :src="imgF" />
                                      </div>
                                    </div>
                                    <div class="score">
                                      <div class="name">{{ nameF }}</div>
                                      <div class="numb">{{ formatPrice(firsts) }}</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="wrap-top">
                                  <div class="top top2">
                                    <div class="absolute">
                                      <div class="img">
                                        <img class="avatar" :src="imgS" />
                                      </div>
                                    </div>
                                    <div class="score">
                                      <div class="name">{{ nameS }}</div>
                                      <div class="numb">{{ formatPrice(seconds) }}</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="wrap-top">
                                  <div class="top top3">
                                    <div class="absolute">
                                      <div class="img">
                                        <img class="avatar" :src="imgT" />
                                      </div>
                                    </div>
                                    <div class="score">
                                      <div class="name">{{ nameT }}</div>
                                      <div class="numb">{{ formatPrice(thirds) }}</div>
                                    </div>
                                  </div>
                                </div>
                              </el-col>
                              <el-col :span="12">
                                <div class="wrap-rank">
                                  <el-carousel
                                    @change="changeSlide"
                                    :interval="5000"
                                    direction="vertical"
                                    :autoplay="false"
                                    ref="slider"
                                  >
                                    <el-carousel-item v-for="i in 2" :key="i">
                                      <div class="rank" v-for="(j, idx) in subRank" :key="j.id">
                                        <div class="absolute ab-sub">
                                          <div class="img img-sub">
                                            <img class="avatar img-sub" :src="j.img" />
                                          </div>
                                        </div>
                                        <div class="score">
                                          <div class="name">{{ j.name }}</div>
                                          <div class="numb">{{ formatPrice(j.money) }}</div>
                                        </div>
                                        <div class="stt text-white">{{ otherRank[slideCurrent][idx] }}</div>
                                      </div>
                                    </el-carousel-item>
                                  </el-carousel>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
                <div class="right right1">
                  <img src="@/assets/images/icons/absolute2.png" />
                </div>
              </div>
            </div>
          </div>

          <div class="md:mt-16 mt-0">
            <div class="text2">
              <img class="mx-auto w-3/5" src="@/assets/images/icons/19.png" />
            </div>
            <div class="wrap-frame">
              <div class="frame mt-5">
                <div class="w-full left left2">
                  <img class="w-full" src="@/assets/images/icons/absolute3.png" />
                </div>
                <div class="center">
                  <div class="content">
                    <carousel :autoplay="true" :loop="true" :per-page="1" paginationPosition="bottom-overlay">
                      <slide>
                        <div class="wrap-image">
                          <img src="@/assets/images/slider/slide5.png" />
                        </div>
                      </slide>
                      <slide>
                        <div class="wrap-image">
                          <img src="@/assets/images/slider/slide4.png" />
                        </div>
                      </slide>
                      <slide>
                        <div class="wrap-image">
                          <img src="@/assets/images/slider/slide1.png" />
                        </div>
                      </slide>
                      <slide>
                        <div class="wrap-image">
                          <img src="@/assets/images/slider/slide2.png" />
                        </div>
                      </slide>
                      <slide>
                        <div class="wrap-image">
                          <img src="@/assets/images/slider/slide6.png" />
                        </div>
                      </slide>
                    </carousel>
                  </div>
                </div>
                <div class="right w-full right2">
                  <img src="@/assets/images/icons/absolute4.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="p-6 md:p-6 pt-0 text-center pb-24 md:pb-4">
        <span class="text-white text-xs sm:text-sm font-bold"
          ><a
            class="text-white"
            href="https://www.78win.vn/"
            target="
        _blank"
            >78WIN.com</a
          >
          - Bản quyền © 2021</span
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Carousel, Slide } from 'vue-carousel';
import { Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import anh1 from '@/assets/images/icons/anh1.png';
import anh2 from '@/assets/images/icons/anh2.png';
import anh3 from '@/assets/images/icons/anh3.png';
import anh4 from '@/assets/images/icons/anh4.png';
import anh5 from '@/assets/images/icons/anh5.png';
import anh6 from '@/assets/images/icons/anh6.png';
import anh7 from '@/assets/images/icons/anh7.png';
import anh8 from '@/assets/images/icons/anh8.png';
import anh9 from '@/assets/images/icons/anh9.png';
import anh10 from '@/assets/images/icons/anh10.png';

@Component({
  components: { Carousel, Slide },
  computed: {
    ...mapGetters('home', ['device']),
  },
})
export default class Home extends Vue {
  public loading: boolean = true;
  public device!: string;
  public activeName: string = 'three';
  public itemsRank: number = 5;
  public maxNb: number = new Date().valueOf();
  public firsts: number = this.getRandomInt(3000000000, 8000000000);
  public seconds: number = this.getRandomInt(3000000000, this.firsts - 10000000);
  public thirds: number = this.getRandomInt(3000000000, this.seconds - 1000);

  public names: string[] = [
    'huan****khs',
    'thai****fds',
    'dand****ai',
    'desd****efr',
    'thaf****and',
    'khin****an',
    'vovv****inh',
    'mast****hinh',
    'madd****kin',
    'lagr****erf',
    'lock****dfe',
    'mons****fws',
    'tuik****kif',
    'hiur****rew',
    'mhir****ol',
    'mkll****tie',
    'thur****yte',
    'khan****ujy',
    'tuan****tre',
    'tinh****ucd',
    'wdss****ruc',
    'aaw1****rui',
    'dsf3****hai',
    'lkir****tet',
    'juni****kie',
    'rtyu****ide',
    'xxxp****exp',
    'rpiy****asw',
    'awsd****wer',
    'ssaf****kos',
    'swsd****lji',
    'nguy****rfg',
    'davi****qwe',
    'drww****rdf',
    'awrs****asd',
    'awrs****cfe',
    'kihn****hin',
    'nguy****anh',
    'thai****kil',
    'huan****yte',
    'qwe****dws',
    'wqr****asd',
    'huan****rgg',
    'hti****rrr',
    'yur****deg',
    'htk****egd',
    'anh****wqa',
    'rew****dsd',
  ];
  public imgs: any[] = [anh1, anh2, anh3, anh4, anh5, anh6, anh7, anh8, anh9, anh10];
  public nameF: string = this.names[this.getRandomInt(0, 47)];
  public nameS: string = this.names[this.getRandomInt(0, 47)];
  public nameT: string = this.names[this.getRandomInt(0, 47)];
  public imgF: string = this.imgs[this.getRandomInt(0, 9)];
  public imgS: string = this.imgs[this.getRandomInt(0, 9)];
  public imgT: string = this.imgs[this.getRandomInt(0, 9)];
  public slideCurrent: number = 0;
  public subRank: any = [];
  public minMoney: number = 0;
  public otherRank: number[][] = [
    [4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13],
  ];

  public promotions: string[] = [
    'Khuyến mãi FREEBET 30K',
    'Khuyến mãi Nạp Lần Đầu Tiên lên đến 120%',
    'Khuyến mãi chào mừng hội viên mới mãn tuần, mãn tháng',
    'Chơi bài 3D Nhận Quà Cực Phê',
    'Siêu Thưởng Tiền Mặt Hàng tháng lên đến 50 Triệu Đồng',
    'Chơi Slot Game Thưởng Lên đến 88.888.888',
  ];

  public mounted() {
    if (this.device === 'mobile') this.itemsRank = 5;
    this.generateRank(0);
    setInterval(() => {
      this.firsts = this.getRandomInt(4000000000, 8000000000);
      this.seconds = this.getRandomInt(4000000000, this.firsts - 10000000);
      this.thirds = this.getRandomInt(4000000000, this.seconds - 1000);
      this.nameS = this.names[this.getRandomInt(0, 47)];
      this.nameF = this.names[this.getRandomInt(0, 47)];
      this.nameT = this.names[this.getRandomInt(0, 47)];
      this.imgF = this.imgs[this.getRandomInt(0, 9)];
      this.imgS = this.imgs[this.getRandomInt(0, 9)];
      this.imgT = this.imgs[this.getRandomInt(0, 9)];
      this.generateRank(this.slideCurrent);
    }, 5000);
    this.next();
  }

  public generateRank(index: number = 0) {
    const ids: number[][] = [
      [4, 5, 6, 7, 8],
      [9, 10, 11, 12, 13],
    ];
    let maxMn: number = index ? this.minMoney : this.thirds;
    let min: number = index ? 1000000000 : 2000000000;
    this.subRank = ids[index].map((item) => ({
      id: item,
      name: this.names[this.getRandomInt(0, 47)],
      img: this.imgs[this.getRandomInt(0, 9)],
      money: this.getRandomInt(min, maxMn - item * 5),
    }));
    this.subRank = this.subRank.sort((a: any, b: any) => b.money - a.money);
    this.minMoney = this.subRank[4].money;
  }

  public changeSlide(index: number) {
    this.slideCurrent = index;
    this.generateRank(index);
  }
  public getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  public handleClick(tab: any, event: any) {
    // console.log(tab, event);
  }

  public next() {
    (this.$refs.slider as any).next();
  }

  public redirectExternal(link: string) {
    window.open(link, '_blank');
  }
  public formatPrice(value: number) {
    const val = (value / 1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
</script>

<style lang="scss" scoped>
.text-white {
  color: #fff !important;
}
.detail-km {
  background-color: #2ab5ab !important;
  .txt-km {
    max-width: 70%;
  }
}
.item-km {
  background: url('~@/assets/images/bg-km.png') no-repeat;
  background-size: contain;
  width: 100%;
  height: 45px;
  font-size: 13px;
}
.btn-zone {
  img {
    width: 180px;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
}
.mobile-qc {
  width: 330px;
  margin: auto;
}
.chat-mobile {
  text-align: center;
  position: fixed;
  width: 60px;
  height: 60px;
  top: 45%;
  z-index: 9999;
  display: none;
  right: 0;
  img {
    width: 20px;
    margin: auto;
    padding-top: 8px;
  }
  a {
    font-size: 8px;
  }
}
.stt {
  position: absolute;
  right: 5.5%;
  font-size: 14px;
}
/deep/ .content {
  ul {
    margin-left: 0px !important;
  }
}
/deep/ .el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.w-full {
  width: 100% !important;
}
@media screen and (max-width: 375px) {
  .stt {
    right: -5% !important;
    top: 2px !important;
  }
}
@media (min-width: 768px) {
  .stt {
    top: 20%;
    right: 7.5%;
  }
}
@media screen and (max-width: 768px) {
  .detail-km {
    .txt-km {
      max-width: 60%;
    }
  }
  .item-km {
    font-size: 8px;
    height: 21px;
    padding-left: 20px;
  }
  .btn-zone {
    img {
      width: 100px;
    }
  }
  .wrap-frame {
    margin-top: -1.4rem;
  }
  .chat-mobile {
    display: block;
  }
  .ab-sub {
    top: 0 !important;
  }
  .img-sub {
    width: 14px !important;
    height: 14px !important;
  }
  .stt {
    top: 3px;
    font-size: 8px !important;
  }
  .wrap-rank .rank .absolute .img {
    border: solid 1px white;
  }
  .wrap-top {
    .top {
      .img {
        border: solid 1px white;
      }
    }
  }
  .numb,
  .name {
    line-height: 5px !important;
    font-size: 4px;
  }
  .name {
    margin-top: 2px;
    margin-bottom: 1px;
  }
  .frame-custom {
    padding-bottom: 77%;
  }
  .big-space {
    height: 0px;
  }
}
</style>
