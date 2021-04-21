<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}}
          <a href="https://ltv.vn" class="font-weight-bold ml-1" target="_blank">Bosware</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public get year() {
    return new Date().getFullYear();
  }
}
</script>
