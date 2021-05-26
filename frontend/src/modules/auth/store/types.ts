export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_NEWS = 'SET_NEWS';
export const LOGOUT = 'LOGOUT';
export interface AuthState {
  isAuthenticated: boolean;
  userID: string;
  news: any[];
}

export interface ILogin {
  PlatFormCode: string;
  UserID: string;
  UserPhone: string;
}
