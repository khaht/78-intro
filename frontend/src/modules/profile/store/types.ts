import { IAttachData } from 'store/types';

export const SET_PROFILE = 'SET_PROFILE';
export const SET_LATEST_PROMO = 'SET_LATEST_PROMO';
export interface ProfileState {
  latestPromo: any[];
  profile: any;
}

export interface IUserBonusByPage {
  PlatFormCode: string;
  UserID: string;
  SesionID: string;
  AttachData?: IAttachData;
}
