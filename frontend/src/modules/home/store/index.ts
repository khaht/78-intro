import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { HomeState } from './types';
import { RootState } from 'store/types';

export const state: HomeState = {
  device: 'desktop',
  siteInfo: localStorage.getItem('site_info')
    ? JSON.parse(localStorage.getItem('site_info') || '')
    : {},
  screenSize: {
    w: window.innerWidth,
    h: window.innerHeight,
  },
};

const namespaced: boolean = true;

export const home: Module<HomeState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
