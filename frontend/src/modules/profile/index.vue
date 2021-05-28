<template>
  <div class="pb-16">
    <div class="banner text-center py-2 mt-2 justify-center flex items-center">
      <span class="text-white font-bold text-lg">{{ profile.userId }}</span>
      <img class="mr-3 img-logout" @click="logout" src="@/assets/images/icon-logout.png" width="15" alt="" />
    </div>
    <div class="mt-10 px-10">
      <div class="border p-4 text-center shadow rounded mb-2">
        <span class="text-red-500 font-bold">Khuyến mãi trong ngày: 5000</span>
      </div>
      <div class="border p-4 text-center shadow rounded mb-2">
        <span class="text-red-500 font-bold">Khuyến mãi trong ngày: 5000</span>
      </div>
      <div class="border p-4 text-center shadow rounded mb-2">
        <span class="text-red-500 font-bold">Khuyến mãi trong ngày: 5000</span>
      </div>
    </div>
    <div class="px-4 mt-8 pb-4">
      <p class="font-bold text-sm">5 khuyến mãi tham gia gần đây</p>
      <div class="box-table banner rounded mt-4 p-4">
        <el-table
          row-class-name="row-style"
          header-row-class-name="header-tbl"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="date" label="Tên khuyến mãi"> </el-table-column>
          <el-table-column prop="name" label="Số tiền"> </el-table-column>
          <el-table-column prop="address" label="Thời gian">
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="px-4 mt-8 pb-16">
      <div class="flex justify-between">
        <p class="font-bold text-sm">5 đơn đăng ký khuyến mãi gần nhất</p>
        <p class="text-sm text-blue-500 underline">Xem thêm</p>
      </div>

      <div class="box-table banner rounded mt-4 p-4">
        <el-table
          row-class-name="row-style"
          header-row-class-name="header-tbl"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column prop="date" label="Tên khuyến mãi"> </el-table-column>
          <el-table-column prop="name" label="Số tiền"> </el-table-column>
          <el-table-column prop="address" label="Thời gian">
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
              <span>{{ scope.row.date }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';
import { ResponseMsg } from 'store/types';
import { mapGetters, mapActions } from 'vuex';
import { ACCESS_TOKEN_KEY } from 'core/constants';
import { IUserBonusByPage } from './store/types';
import router from 'router';

@Component({
  components: {},
  computed: {
    ...mapGetters('profile', ['latestPromo', 'profile']),
  },
  methods: {
    ...mapActions('profile', ['actGetUserBonusByPage']),
    ...mapActions('auth', ['actLogout']),
  },
})
export default class Profile extends Vue {
  public tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];
  public profile!: any;
  public actGetUserBonusByPage!: (data: IUserBonusByPage) => Promise<ResponseMsg>;
  public actLogout!: () => void;

  public logout() {
    this.actLogout();
    router.push({ name: 'login' });
  }

  public created() {
    // this.actGetUserBonusByPage({
    //   PlatFormCode: '78win',
    //   UserID: this.profile.userId,
    //   SesionID: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
    // }).catch(() => {
    //   this.$message.error('Không thể lấy dữ liệu');
    // });
  }
}
</script>

<style lang="scss" scoped>
.img-logout {
  position: absolute;
  right: 0;
}
.banner {
  background: rgb(144, 18, 66);
  background: linear-gradient(278deg, rgba(144, 18, 66, 1) 17%, rgba(107, 13, 49, 1) 50%, rgba(75, 9, 36, 1) 100%);
}
/deep/ .el-table--border {
  th {
    border-right: 0;
  }
}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent;
}
/deep/ .el-table {
  background: transparent;
  tr,
  th {
    background: transparent;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    .cell {
      font-size: 12px;
    }
  }
  td {
    text-align: center;
  }
}
/deep/ .header-tbl {
  div {
    color: white;
  }
}
</style>
