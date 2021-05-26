import { MutationTree } from 'vuex';
import { AuthState, LOGIN_SUCCESS, LOGOUT } from './types';
import { ACCESS_TOKEN_KEY, USER_ID } from 'core/constants';

export const mutations: MutationTree<AuthState> = {
  [LOGIN_SUCCESS](state: AuthState, data: any) {
    localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
    localStorage.setItem(USER_ID, data.userId);
    state.isAuthenticated = true;
    state.userID = data.userId;
  },
  [LOGOUT](state: AuthState) {
    localStorage.clear();
    state.isAuthenticated = false;
    state.userID = '';
  },
};
