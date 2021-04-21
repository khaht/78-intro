import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './types';
import { home } from 'modules/home/store';
import { constraint } from 'modules/landing/store';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: process.env.APP_VERSION || 'development',
    splashScreen: false,
  },
  mutations: {},
  modules: {
    home,
    constraint,
  },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
