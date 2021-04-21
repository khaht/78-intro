import { getAuthInstance } from './authWrapper';

export const authGuard = (to: any, from: any, next: any) => {
  const authService: any = getAuthInstance();

  const fn = () => {
    authService.isAuthenticated = true;
    // TODO: Implement this authentication
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  if (!authService.loading) {
    return fn();
  }

  authService.$watch('loading', (loading: boolean) => {
    if (loading === false) {
      return fn();
    }
  });
};
