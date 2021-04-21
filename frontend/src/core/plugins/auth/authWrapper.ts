import Vue from 'vue';
// import createauthClient from '@auth0/auth0-spa-js';

const DEFAULT_REDIRECT_CALLBACK = (p?: any) =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance: any;

export const getAuthInstance = () => instance || {};

export const useAuth = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = window.location.origin,
  ...options
}) => {
  if (instance) {
    return instance;
  }

  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        authClient: null,
        popupOpen: false,
        error: null,
      };
    },
    methods: {
      async loginWithPopup(o: any) {
        this.popupOpen = true;

        try {
          await (this as any).authClient.loginWithPopup(o);
          this.user = await (this as any).authClient.getUser();
          this.isAuthenticated = await (this as any).authClient.isAuthenticated();
          this.error = null;
        } catch (e) {
          // tslint:disable-next-line:no-console
          console.error(e);
          this.error = e;
        } finally {
          this.popupOpen = false;
        }
      },
      async handleRedirectCallback() {
        this.loading = true;
        try {
          await (this as any).authClient.handleRedirectCallback();
          this.user = await (this as any).authClient.getUser();
          this.isAuthenticated = true;
          this.error = null;
        } catch (e) {
          this.error = e;
        } finally {
          this.loading = false;
        }
      },
      loginWithRedirect(o: any) {
        return (this as any).authClient.loginWithRedirect(o);
      },
      getIdTokenClaims(o?: any) {
        return (this as any).authClient.getIdTokenClaims(o);
      },
      getTokenSilently(o?: any) {
        return (this as any).authClient.getTokenSilently(o);
      },
      getTokenWithPopup(o: any) {
        return (this as any).authClient.getTokenWithPopup(o);
      },
      logout(o: any) {
        return (this as any).authClient.logout(o);
      },
    },
    async created() {
      // (this as any).authClient = await createauthClient({
      //   domain: options.domain || 'accounts.ltv.vn',
      //   client_id: options.clientId,
      //   audience: options.audience,
      //   redirect_uri: redirectUri
      // });

      try {
        if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=')
        ) {
          const {
            appState,
          } = await (this as any).authClient.handleRedirectCallback();
          this.error = null;
          onRedirectCallback(appState);
        }
      } catch (e) {
        this.error = e;
      } finally {
        this.isAuthenticated = await (this as any).authClient.isAuthenticated();
        this.user = await (this as any).authClient.getUser();
        this.loading = false;
      }
    },
  });

  return instance;
};

export const Auth0Plugin = {
  // tslint:disable-next-line:no-shadowed-variable
  install(Vue: any, options: any) {
    Vue.prototype.$auth = useAuth(options);
  },
};
