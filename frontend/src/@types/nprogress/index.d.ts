declare module 'nprogress' {
  interface NProgressOptions {
    minimum: number;
    template: string;
    easing: string;
    speed: number;
    trickle: boolean;
    trickleSpeed: number;
    showSpinner: boolean;
    parent: string;
    positionUsing: string;
    barSelector: string;
    spinnerSelector: string;
  }

  export default class NProgress {
    public static remove: () => void;
    public static configure(options: Partial<NProgressOptions>): NProgress;
    public static set(value: number): NProgress;
    public static isStarted(): boolean;
    public static start(): NProgress;
    public static done(force?: boolean): NProgress;
    public static inc(amount?: number): NProgress;
    public static trickle(): NProgress;
  }
}
