import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchAuthError, fetchAuthSuccess, isLoading } from './authActions';
import { FETCH_ACCESS_TOKEN, FETCH_AUTH } from './authActionsType';
import { logout } from '../logout/logoutActions';
import { apiAuth, apiRefreshToken } from '../../api/auth/apiAuth';

export function* fetchAuthSaga({ payload }) {
  yield put(isLoading(true));
  try {
    const data = yield call(apiAuth, payload);

    yield put(fetchAuthSuccess({ ...data }));
  } catch (error) {
    if (error.response.status === 401) {
      try {
        const refresh = localStorage.getItem('refresh');
        const data = yield call(apiRefreshToken, { refresh });

        yield put(
          fetchAuthSuccess({
            ...data,
            refresh,
          })
        );
      } catch (error) {
        yield put(logout());
      }
    }

    yield put(fetchAuthError({ error }));
  }

  yield put(isLoading(false));
}

export function* refreshTokenSaga({ payload }) {
  yield put(isLoading(true));

  try {
    const data = yield call(apiRefreshToken, payload);

    yield put(
      fetchAuthSuccess({
        ...data,
        ...payload,
      })
    );
  } catch (error) {
    yield put(fetchAuthError({ error }));
  }

  yield put(isLoading(false));
}

export function* fetchAuthWatcher() {
  yield takeEvery(FETCH_AUTH, fetchAuthSaga);
  yield takeEvery(FETCH_ACCESS_TOKEN, refreshTokenSaga);
}
