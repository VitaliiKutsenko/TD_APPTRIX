import { put, takeEvery, call, join, fork } from 'redux-saga/effects';
import { youtrackAll, youtrackUsers } from '../../api/youTrack/youTrack';
import { isLoading } from '../auth/authActions';
import { FETCH_USER } from './usersActionsType';
import { fetchUserError, fetchUserSuccess } from './usersActions';
import { all } from 'axios';

export function* test() {}

export function* fetchUserSaga({ payload }) {
  // yield put(isLoading(true));
  try {
    const data = yield call(youtrackUsers, payload);

    yield put(fetchUserSuccess(data));
  } catch (error) {
    yield put(fetchUserError({ error }));
  }

  // yield put(isLoading(false));
}

export function* fetchUserWatcher() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}
