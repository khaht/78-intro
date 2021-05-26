import { MutationTree } from 'vuex';
import { HomeState, SET_DEVICE, SET_NOTICE, SET_NEWS } from './types';

export const mutations: MutationTree<HomeState> = {
  [SET_DEVICE](state: HomeState, params: any) {
    const { device, screenSize } = params;
    state.device = device;
    state.screenSize = screenSize;
  },
  [SET_NOTICE](state: HomeState, notices: any[]) {
    state.notices = notices;
  },
  [SET_NEWS](state: HomeState, news: any[]) {
    state.news = news;
  },
};
