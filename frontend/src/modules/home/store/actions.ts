import { ActionTree } from 'vuex';
import { HomeState, SET_DEVICE, SET_NEWS, SET_NOTICE } from './types';
import { RootState, ResponseMsg, News } from 'store/types';
import { HomeServices } from '../service';

const service = new HomeServices();

export const actions: ActionTree<HomeState, RootState> = {
  setDevice({ commit }, params) {
    commit(SET_DEVICE, params);
  },
  actGet78winPromoCenter({ commit }) {
    return new Promise((resolve, reject) => {
      service
        .get78winPromoCenter()
        .then((res: ResponseMsg) => {
          const {
            Data: { PromoList, NoticeList },
          } = res;
          const promoLst: News[] = PromoList.map((news: News) => {
            news.TagList = [];
            if (!!news.Tag) {
              news.TagList = news.Tag.split(',');
            }
            return news;
          });
          commit(SET_NEWS, promoLst);
          commit(SET_NOTICE, NoticeList);
          resolve(res.Data);
        })
        .catch((err: Error) => {
          reject(err);
        });
    });
  },
};
