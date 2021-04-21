import { MutationTree } from 'vuex';
import { HomeState, SET_DEVICE } from './types';

export const mutations: MutationTree<HomeState> = {
  [SET_DEVICE](state, params: any) {
    const { device, screenSize } = params;
    state.device = device;
    state.screenSize = screenSize;
  },
};
