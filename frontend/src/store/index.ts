import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from './types';
import { promotion } from 'modules/promotion/store';
import { auth } from 'modules/auth/store';
import { profile } from 'modules/profile/store';
import { home } from 'modules/home/store';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: process.env.APP_VERSION || 'development',
    splashScreen: false,
  },
  mutations: {},
  modules: {
    promotion,
    home,
    auth,
    profile,
  },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
