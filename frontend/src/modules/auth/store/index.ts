import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { AuthState } from './types';
import { RootState } from 'store/types';
import { ACCESS_TOKEN_KEY, USER_ID } from 'core/constants';

export const state: AuthState = {
  isAuthenticated: !!localStorage.getItem(ACCESS_TOKEN_KEY),
  userID: localStorage.getItem(USER_ID) || '',
  news: [],
};

const namespaced: boolean = true;

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
