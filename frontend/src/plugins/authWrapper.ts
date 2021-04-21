import Vue from 'vue';
import router from 'router';
// import { AuthService } from '../modules/auth/service';
import { USER_LOGGED, ACCESS_TOKEN_KEY } from 'core/constants';
import store from 'store';

let instance: any;
export const getAuthInstance = () => instance;

export const useAuth = () => {
  if (instance) {
    return instance;
  }

  instance = new Vue({
    data() {
      return {};
    },
    methods: {},
    async created() {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (token) {
          // const service = new AuthService();
          // const resp = await service.me();
          // const { me } = resp;
          // const { auth, profile } = me;
          // localStorage.setItem(USER_LOGGED, JSON.stringify(auth));
          // store.commit('auth/AUTH_USER', me);
          // store.commit('profile/INIT_PROFILE', {
          //   profile,
          //   redirect: false,
          // });
        }
      } catch {}
    },
  });

  return instance;
};

export const AuthPlugin = {
  // tslint:disable-next-line:no-shadowed-variable
  install(Vue: any, options: any) {
    Vue.prototype.$auth = useAuth();
  },
};
