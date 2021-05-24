import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { AuthState } from './types';
import { RootState } from 'store/types';

export const state: AuthState = {
  isAuthenticated: false,
};

const namespaced: boolean = true;

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
