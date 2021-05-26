import { ActionTree } from 'vuex';
import { ProfileState, SET_LATEST_PROMO, IUserBonusByPage } from './types';
import { ResponseMsg, RootState } from 'store/types';
import { ProfileServices } from '../service';

const service = new ProfileServices();

export const actions: ActionTree<ProfileState, RootState> = {
  actGetUserBonusByPage({ commit }, data: IUserBonusByPage) {
    return new Promise((resolve, reject) => {
      service
        .getUserBonusByPage(data)
        .then((res: ResponseMsg) => {
          commit(SET_LATEST_PROMO, res.Data.data || []);
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
};
