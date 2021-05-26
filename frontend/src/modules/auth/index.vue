<template>
  <div class="pb-16">
    <div class="px-6 mt-8">
      <div class="rounded box-shadow p-4">
        <el-form @submit.prevent.native="handldeLogin" :model="formGeneral" ref="formGeneral" class="demo-dynamic">
          <div class="mt-4">
            <el-form-item
              :rules="[{ required: true, message: ' ', trigger: 'blur' }]"
              prop="name"
              label="Tên đăng nhập:"
              label-width="130px"
            >
              <el-input prefix-icon="el-icon-user" type="text" v-model="formGeneral.name"></el-input>
            </el-form-item>

            <div class="flex f-item-custom">
              <el-form-item :rules="ruleNumber" prop="num1" label="4 số cuối của SĐT:" label-width="150px">
                <el-input
                  @input="(value) => nextFocus(value, 1, 'input2')"
                  type="text"
                  :maxlength="1"
                  v-model.number="formGeneral.num1"
                ></el-input>
              </el-form-item>
              <el-form-item :rules="ruleNumber" prop="num2" label="" label-width="0px">
                <el-input
                  @input="(value) => nextFocus(value, 1, 'input3')"
                  ref="input2"
                  type="text"
                  :maxlength="1"
                  v-model.number="formGeneral.num2"
                ></el-input>
              </el-form-item>
              <el-form-item :rules="ruleNumber" prop="num3" label="" label-width="0px">
                <el-input
                  @input="(value) => nextFocus(value, 1, 'input4')"
                  ref="input3"
                  type="text"
                  :maxlength="1"
                  v-model.number="formGeneral.num3"
                ></el-input>
              </el-form-item>
              <el-form-item :rules="ruleNumber" prop="num4" label="" label-width="0px">
                <el-input ref="input4" type="text" :maxlength="1" v-model.number="formGeneral.num4"></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex justify-around">
              <el-button class="btn-next" @click="gotoHome">Trở về</el-button>
              <el-button class="btn-login" :loading="loadingBtn" @click="handldeLogin">Đăng nhập</el-button>
            </div>
          </div>
        </el-form>
      </div>
      <div class="mt-8">
        <p class="text-black font-bold">Thông tin nổi bật</p>
        <ul class="mt-4">
          <li class="flex justify-end">
            <span class="self-end">1. </span>
            <span class="w-full inline-block h-20 mt-3 bg-only"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import { ILogin } from './store/types';
import { ResponseMsg } from 'store/types';
import router from 'router';

@Component({
  components: {},
  computed: {
    ...mapGetters('home', ['device']),
    ...mapGetters('auth', ['news']),
  },
  methods: {
    ...mapActions('auth', ['actLogin', 'actGet78winPromoCenter']),
  },
})
export default class Login extends Vue {
  public formGeneral: any = {};
  public loadingBtn: boolean = false;
  public ruleNumber: any[] = [
    { required: true, message: ' ', trigger: 'blur' },
    { type: 'number', message: ' ', trigger: 'blur' },
  ];
  public actLogin!: (account: any) => Promise<any>;
  public actGet78winPromoCenter!: () => Promise<any>;

  public nextFocus(value: string, maxlength: number, refNextNm: string) {
    if (value.length === maxlength) {
      (this.$refs[refNextNm] as any).focus();
    }
  }

  public gotoHome() {
    router.push({ path: '/' });
  }

  public created() {
    this.actGet78winPromoCenter();
  }

  public handldeLogin() {
    (this.$refs.formGeneral as any).validate((valid: boolean) => {
      if (valid) {
        this.loadingBtn = true;
        const data: ILogin = {
          PlatFormCode: '78win',
          UserPhone: `${this.formGeneral.num1}${this.formGeneral.num2}${this.formGeneral.num3}${this.formGeneral.num4}`,
          UserID: this.formGeneral.name,
        };
        this.actLogin(data)
          .then((res: ResponseMsg) => {
            this.loadingBtn = false;
            const { Code } = res;
            if (res.IsSuccessful) {
              router.push({ path: '/' });
            } else {
              switch (+Code) {
                case 2109:
                  this.$message.error('Số điện thoại không đúng');
                  break;
                case 2005:
                  this.$message.error('Tên đăng nhập không đúng');
                  break;
              }
            }
          })
          .catch(() => {
            this.loadingBtn = false;
            this.$message.error('Có lỗi xảy ra');
          });
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0px 1px 11px 2px #ccc;
}
/deep/ .el-input__inner {
  background: #fcf5ff;
  box-shadow: inset 0px 1px 0px 0px #ccc;
}
/deep/ .f-item-custom {
  .el-input__inner {
    padding: 0;
    text-align: center;
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
}
/deep/ .el-form-item__label {
  &::before {
    color: #fff !important;
  }
  text-align: left;
  font-size: 13px;
}
/deep/ .el-input__icon {
  font-size: 25px;
  color: #000;
}
.btn-login {
  background: #9a2c57;
  color: #fff;
}
.btn-next {
  box-shadow: inset 0px 1px 0px 0px #ccc;
}
.btn-login,
.btn-next {
  border-radius: 10px;
  width: 140px;
}
</style>
