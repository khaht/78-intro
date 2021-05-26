import { ActionTree } from 'vuex';
import { AuthState, ILogin, LOGIN_SUCCESS, LOGOUT } from './types';
import { RootState, ResponseMsg } from 'store/types';
import { AuthServices } from '../service';

const service = new AuthServices();

export const actions: ActionTree<AuthState, RootState> = {
  actLogin({ commit }, data: ILogin) {
    return new Promise((resolve, reject) => {
      service
        .login(data)
        .then((res: ResponseMsg) => {
          commit(LOGIN_SUCCESS, { token: res.Data, userId: data.UserID });
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
  actGet78winPromoCenter({ commit }) {
    return new Promise((resolve, reject) => {
      service
        .get78winPromoCenter()
        .then((res: ResponseMsg) => {
          resolve(res.Data);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
  actLogout({ commit }) {
    commit(LOGOUT);
  },
};
