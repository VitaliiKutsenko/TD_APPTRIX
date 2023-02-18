import { all } from 'redux-saga/effects';
import { fetchAuthWatcher } from '../auth/authSaga';
import { fetchUserWatcher } from '../users/usersSaga';

export function* rootSaga() {
  yield all([fetchAuthWatcher(), fetchUserWatcher()]);
}
