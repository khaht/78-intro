<template>
  <layout v-if="offlineConfirmed">
    <h1 :class="$style.title">
      The page timed out while loading. Are you sure you're still connected to
      the Internet?
    </h1>
  </layout>
</template>
<script lang="ts">
import axios from 'axios';
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';

import { PageService } from '../service/index';

const service = new PageService();

@Component
export default class Timeout extends Vue {
  public offlineConfirmed: boolean = false;

  public beforeCreate() {
    service
      .ping()
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        this.offlineConfirmed = true;
      });
  }
}
</script>

<style lang="scss" scoped>
</style>
