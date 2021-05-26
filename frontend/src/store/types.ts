export interface RootState {
  version: string;
  splashScreen: boolean;
}
export interface ResponseMsg {
  MultipleData?: any;
  MultipleMessage?: any;
  Data: any;
  IsSuccessful?: boolean;
  Message?: string;
  Code: string;
}

export interface News {
  ApiUrlA: string;
  ApiUrlB: string;
  ApiUrlC: string;
  PlatFormCode: string;
  PromoCode: string;
  PromoGroup: string;
  PromoName: string;
  PromoType: number;
  Sort: number;
  Tag: string;
  TagList: string[];
}

export interface IAttachData {
  PageIndex?: number;
  PageRows?: number;
  PromoCode?: string;
}
