<template>
  <layout>
    <transition appear>
      <!-- <BaseIcon :class="$style.loadingIcon" name="sync" spin /> -->
    </transition>
  </layout>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  public page: any = {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  };
}
</script>

<style lang="scss" scoped></style>
