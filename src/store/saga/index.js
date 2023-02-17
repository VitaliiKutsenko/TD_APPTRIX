import { all } from 'redux-saga/effects';
import { fetchAuthWatcher } from '../auth/authSaga';

export function* rootSaga() {
  yield all([fetchAuthWatcher()]);
}
