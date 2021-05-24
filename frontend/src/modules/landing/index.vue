<template>
  <div class="pb-16">
    <div class="banner">
      <img class="img-banner" src="@/assets/images/banner.png" alt="" />
    </div>
    <div class="text-center my-4">
      <el-button class="btn-reg">Đăng ký</el-button>
    </div>
    <div class="content px-6 pb-4">
      <p>Nội dung khuyến mãi</p>
      <div class="box-content p-4 mb-6">
        <span class="text-red font-bold">KHUYẾN MÃI LẦN ĐẦU NẠP LÊN ĐẾN 120%</span> <br />
        <span class="text-red font-bold">Mã khuyến mãi ZH09</span>
        <div>
          <p class="pt-6">TẶNG THƯỞNG LẦN ĐẦU TIÊN LÊN ĐẾN 120%</p>
          <p>
            78Win xin tặng bạn giá trị khuyến mãi lên đến 120% cho lần gửi đầu tiên. Tiền thưởng tối đa là 7.888.000
            VNĐ. Đây là phần thưởng trực tiếp nhất và hợp lý nhất để cảm ơn sự lựa chọn, tin tưởng và ủng hộ tất cả các
            thành viên mới cho 78Win
          </p>
          <p>Mô tả khuyến mãi</p>
          <ul class="pb-10">
            <li>
              <span class="number-order">1</span>
              <span
                >Đối tượng tham gia: Tất cả thành viên có tài khoản cá cược hợp lệ tham gia gửi tiền lần đầu tiên tại
                78Win</span
              >
            </li>
            <li>
              <span class="number-order">2</span>
              <span>Thời gian khuyến mãi: Từ bây giờ - thông báo ngưng khuyến mãi trên website</span>
            </li>
            <li>
              <span class="number-order">3</span>
              <span>Nội dung khuyễn mãi: Đáp ứng các yêu cầu gửi tiền và nhận phần thưởng gửi tiền lần đầu</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
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
.img-banner {
  max-height: 200px;
}
.text-red {
  color: red;
}
.box-content {
  box-shadow: 1px 0px 3px 1px #ccc;
  border-radius: 5px;
  width: 90%;
  margin: auto;
  margin-bottom: 2rem;
}
.content {
  ul {
    margin-left: 0;
    margin-right: 0;
    li {
      list-style: none;
    }
  }
}
.btn-reg {
  background: #8d1242;
  color: #fff;
  font-size: 16px;
}

.number-order {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: solid 1px #ccc;
  text-align: center;
  border-radius: 50%;
  font-size: 13px;
  margin-right: 5px;
}
</style>
