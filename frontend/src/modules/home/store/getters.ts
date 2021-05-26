import { GetterTree } from 'vuex';
import { HomeState } from './types';
import { RootState } from 'store/types';

export const getters: GetterTree<HomeState, RootState> = {
  news(state: HomeState) {
    return state.news;
  },
  notices(state: HomeState) {
    return state.notices;
  },
  device(state: HomeState) {
    return state.device;
  },
};
