<template>
  <div>

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
