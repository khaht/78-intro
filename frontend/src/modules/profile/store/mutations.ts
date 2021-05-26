import { MutationTree } from 'vuex';
import { ProfileState, SET_LATEST_PROMO } from './types';

export const mutations: MutationTree<ProfileState> = {
  [SET_LATEST_PROMO](state: ProfileState, data: any[]) {
    state.latestPromo = data;
  },
};
