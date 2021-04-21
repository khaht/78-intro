<template>
  <section
    class="ps-container"
    :is="tagname"
    @mouseover.once="update"
    @ps-scroll-y="scrollHanle"
    @ps-scroll-x="scrollHanle"
    @ps-scroll-up="scrollHanle"
    @ps-scroll-down="scrollHanle"
    @ps-scroll-left="scrollHanle"
    @ps-scroll-right="scrollHanle"
    @ps-y-reach-start="scrollHanle"
    @ps-y-reach-end="scrollHanle"
    @ps-x-reach-start="scrollHanle"
    @ps-x-reach-end="scrollHanle"
  >
    <slot></slot>
  </section>
</template>

<script lang="ts">
import PerfectScrollbar from 'perfect-scrollbar';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class VuePerfectScrollbar extends Vue {
  @Prop({ default: () => ({ wheelSpeed: 1.5, wheelPropagation: true }) })
  public settings!: any;
  @Prop({ default: true })
  public swicher!: boolean;
  @Prop({ default: 'section' })
  public tagname!: string;

  public ps: any = null;
  public psInited: any = false;

  /** Computed (S) */
  @Watch('swicher')
  public watchSwitcher(val: any) {
    if (val && !this.psInited) {
      this.__init();
    }
    if (!val && this.psInited) {
      this.__uninit();
    }
  }

  @Watch('$route')
  public watchRoute() {
    this.update();
  }
  /** Computed (E) */

  /** Hook (S) */
  public mounted() {
    // debugger
    this.__init();
  }

  public updated() {
    this.$nextTick(this.update as any);
  }

  public activated() {
    this.__init();
  }

  public deactivated() {
    this.__uninit();
  }

  public beforeDestroy() {
    this.__uninit();
  }
  /** Hook (E) */

  /** Methods (S) */
  public scrollHanle(evt: any) {
    this.$emit(evt.type, evt);
  }

  public update(el?: any) {
    // this.ps.update(this.$el)
    if (this.ps) {
      this.ps.update();
    }
  }

  public __init() {
    this.$nextTick(() => {
      if (this.swicher) {
        if (!this.psInited) {
          this.psInited = true;
          this.ps = new PerfectScrollbar(this.$el as any, this.settings);
        } else {
          this.update(this.$el);
        }
      }
    });
  }

  public __uninit() {
    if (this.ps) {
      this.ps.destroy(this.$el);
    }

    this.ps = null;
    this.psInited = false;
  }
  /** Methods (E) */
}
</script>

<style lang="scss">
@import '~perfect-scrollbar/css/perfect-scrollbar.css';
.ps-container {
  position: relative;
}
</style>
