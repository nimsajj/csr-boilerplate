import { REQUEST_STATUS } from "../../../utils/status";
import {
  FETCH_USER_LOGIN_REQUEST,
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
  USER_LOGOUT,
} from "./action";

const { initial, loading, succeeded, removed, error } = REQUEST_STATUS;

const initialState = {
  status: initial,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_REQUEST:
      return { ...state, status: loading };
    case FETCH_USER_LOGIN_SUCCESS:
      return { ...state, status: succeeded };
    case FETCH_USER_LOGIN_ERROR:
      return { ...state, error: action.payload, status: error };
    case USER_LOGOUT:
      localStorage.removeItem("jwt");
      return { ...state, status: removed };
    default:
      return state;
  }
};

export default authReducer;
