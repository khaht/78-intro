import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { ConstraintState } from './types';
import { RootState } from 'store/types';

export const state: ConstraintState = {
  data: [],
  notif: [],
};

const namespaced: boolean = true;

export const promotion: Module<ConstraintState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
