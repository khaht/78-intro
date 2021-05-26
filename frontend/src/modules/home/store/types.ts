export const SET_NEWS = 'SET_NEWS';
export const SET_NOTICE = 'SET_NOTICE';
export const SET_DEVICE = 'SET_DEVICE';
export interface HomeState {
  news: any[];
  notices: any[];
  device: string;
  screenSize: any;
  siteInfo: any;
}
