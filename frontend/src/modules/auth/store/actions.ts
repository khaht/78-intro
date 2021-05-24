import { ActionTree } from 'vuex';
import { AuthState, ILogin } from './types';
import { RootState } from 'store/types';
import { ConstraintInfServices } from '../service';
import { ResponseMessage } from 'models';

const service = new ConstraintInfServices();

export const actions: ActionTree<AuthState, RootState> = {
  actLogin({ commit }, data: ILogin) {
    return new Promise((resolve, reject) => {
      service
        .login(data)
        .then((res: ResponseMessage) => {
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
};
