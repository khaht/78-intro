import { GetterTree } from 'vuex';
import { AuthState } from './types';
import { RootState } from 'store/types';

export const getters: GetterTree<AuthState, RootState> = {
  userId(state: AuthState) {
    return state.userID;
  },
  news(state: AuthState) {
    return state.news;
  },
  isAuthenticated(state: AuthState) {
    return state.isAuthenticated;
  },
};
