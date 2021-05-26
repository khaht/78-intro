import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { ProfileState } from './types';
import { RootState } from 'store/types';
import { USER_ID } from 'core/constants';

export const state: ProfileState = {
  latestPromo: [],
  profile: {
    userId: localStorage.getItem(USER_ID) || '',
  },
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
