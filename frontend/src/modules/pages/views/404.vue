<template>
  <div class="not-found">
    <div class="msg-box flex align-center flex-column">
      <h1 class="animated fadeInDown">404</h1>
      <h3>NOT FOUND</h3>
      <!-- <h2 class="animated fadeInUp">
        It seems that this page does not exist.
      </h2>-->
      <br />
      <el-button type="primary" @click="goHome">Go Home</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
  public goHome() {
    this.$router.push({ path: '/' });
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  background: #35458a;
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.el-button {
  width: 100%;
  max-width: 200px;
  font-size: 20px;
  padding-bottom: 15px;
}
h1 {
  font-size: 100px;
  font-weight: bold;
  color: #ffffff40;
  line-height: 80px;
}
h3 {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #ffffffa6;
}
</style>
