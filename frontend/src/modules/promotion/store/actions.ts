import { ActionTree } from 'vuex';
import { ConstraintState } from './types';
import { RootState } from 'store/types';
import { ConstraintInfServices } from '../service';
import { ResponseMessage, CheckUserInfoInput, SendMsgInput, BindingUserInfoInput } from 'models';

const service = new ConstraintInfServices();

export const actions: ActionTree<ConstraintState, RootState> = {
  actCheckUserAccount({ commit }, usrNm: string) {
    return new Promise((resolve, reject) => {
      service
        .checkUserAccount(usrNm)
        .then((res: ResponseMessage) => {
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
  actSendMsg({ commit }, data: SendMsgInput) {
    return new Promise((resolve, reject) => {
      service
        .sendMsg(data)
        .then((res: ResponseMessage) => {
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
  actBindingUsrInf({ commit }, data: BindingUserInfoInput) {
    return new Promise((resolve, reject) => {
      service
        .bindingUserInfo(data)
        .then((res: ResponseMessage) => {
          resolve(res);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
  actCheckUserInfo({ commit }, data: CheckUserInfoInput) {
    return service
      .checkUserInfo(data)
      .then((res: ResponseMessage) => {
        return res;
      })
      .catch((err: Error) => {
        throw new Error(err.message);
      });
  },
};
