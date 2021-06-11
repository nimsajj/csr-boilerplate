export const FETCH_USER_LOGIN_REQUEST = "FETCH_USER_LOGIN_REQUEST";
export const FETCH_USER_LOGIN_SUCCESS = "FETCH_USER_LOGIN_SUCCESS";
export const FETCH_USER_LOGIN_ERROR = "FETCH_USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";

export const fetchUserLoginRequest = (user) => ({
  type: FETCH_USER_LOGIN_REQUEST,
  payload: user,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
