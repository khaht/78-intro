<template>
  <div>
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
            <li v-for="(notice, idx) in notices" :key="idx" class="mx-3 text-xs sm:text-sm float-left item-mq">
              <strong class="text-red-500 pr-1 text-xs">{{ notice.PlatFormCode }}</strong>
              <a class="text-red-500 text-xs" href="#" target="_blank"> {{ notice.Content }}</a>
            </li>
          </ul>
        </marquee>
      </div>
    </div>
    <div class="px-8 mt-2 bg-gray-50" v-loading="loading">
      <div class="section-1 flex">
        <div class="w-8/12">
          <div class="relative bg-1">
            <div class="absolute bg-abs text-center w-full h-full">
              <div class="flex bg-btn items-center justify-center">
                <el-button @click="gotoRegPromo" class="btn-detail"> Chi tiết KM </el-button>
                <el-button @click="gotoRegPromo" class="btn-reg"> Đăng ký KM </el-button>
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
              <img src="@/assets/images/logo-app.png" class="img-inf mb-1" alt="" />
              <small class="text-small">Trung tâm cá nhân</small>
            </div>
            <div class="box-bot-inf mt-3 bg-only"></div>
          </div>
        </div>
      </div>
      <div class="mt-3 el-row box-end">
        <el-row :gutter="10">
          <el-col v-for="(item, idx) in news" :key="idx" :span="8">
            <div class="mb-3 shadow bg-white rounded bg-demo flex flex-col justify-between items-center">
              <div class="box-top">
                <div class="mb-1 text-center">
                  <el-tag
                    size="mini"
                    :type="showTagType(index)"
                    class="mr-1"
                    v-for="(tag, index) in item.TagList"
                    :key="index"
                    >{{ tag }}</el-tag
                  >
                </div>
                <div class="text-xs text-center" :title="item.PromoName">{{ showPromoNm(item.PromoName) }}</div>
              </div>
              <div class="box-bot">
                <img class="box-img" src="@/assets/images/gold.png" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import router from 'router';
@Component({
  components: {},
  computed: {
    ...mapGetters('home', ['device', 'news', 'notices']),
  },
  methods: {
    ...mapActions('home', ['actGet78winPromoCenter']),
  },
})
export default class Home extends Vue {
  public loading: boolean = true;
  public actGet78winPromoCenter!: () => Promise<any>;
  public created() {
    this.actGet78winPromoCenter()
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }
  public gotoRegPromo() {
    router.push({ path: '/promotion' });
  }
  public showTagType(idx: number) {
    const typeLst: string[] = ['success', 'warning', 'danger', 'success', 'info', 'warning', 'danger'];
    return idx <= typeLst.length ? typeLst[idx] : typeLst[idx - typeLst.length];
  }
  public showPromoNm(name: string) {
    return name.length <= 6 ? name : `${name.substring(0, 6)}...`;
  }
}
</script>

<style lang="scss" scoped>
.bg-btn {
  /deep/ .el-button {
    width: 100px;
    padding: 12px 0;
  }
}
.box-img {
  width: 100px;
  height: auto;
  object-fit: contain;
}
/deep/ .el-tag {
  height: 20px;
  padding: 0 7px;
  line-height: 19px;
  border-radius: 2px;
  font-size: 10px;
}
.btn-reg {
  background: #9a2c57;
  border-color: #9a2c57;
  color: #fff;
}

.btn-reg,
.btn-detail {
  width: 100px;
  height: 35px;
  line-height: 35px;
  padding: 0 0 !important;
  font-size: 12px;
}
</style>
