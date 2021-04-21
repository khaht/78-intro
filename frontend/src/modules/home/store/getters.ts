import { GetterTree } from 'vuex';
import { HomeState } from './types';
import { RootState } from 'store/types';

export const getters: GetterTree<HomeState, RootState> = {
  device(state: HomeState) {
    return state.device;
  },
};
