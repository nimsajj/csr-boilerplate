import { takeEvery, put, call } from "redux-saga/effects";
import { authApi } from "../../../api/endpoints";
import {
  FETCH_USER_LOGIN_REQUEST,
  FETCH_USER_LOGIN_SUCCESS,
  FETCH_USER_LOGIN_ERROR,
} from "./action";

function* fetchLogin(action) {
  try {
    const { data } = yield call(authApi.login, action.payload);
    yield put({
      type: FETCH_USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: FETCH_USER_LOGIN_ERROR,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(FETCH_USER_LOGIN_REQUEST, fetchLogin);
}

export default authSaga;
