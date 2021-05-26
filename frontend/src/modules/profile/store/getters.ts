import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from 'store/types';

export const getters: GetterTree<ProfileState, RootState> = {
  latestPromo(state: ProfileState) {
    return state.latestPromo;
  },
  profile(state: ProfileState) {
    return state.profile;
  },
};
