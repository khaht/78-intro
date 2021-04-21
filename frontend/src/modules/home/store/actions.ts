import { ActionTree } from 'vuex';
import { HomeState, SET_DEVICE } from './types';
import { RootState } from 'store/types';
import { HomeService } from '../service';

const service = new HomeService();

export const actions: ActionTree<HomeState, RootState> = {
  setDevice({ commit }, params) {
    commit(SET_DEVICE, params);
  },
};
