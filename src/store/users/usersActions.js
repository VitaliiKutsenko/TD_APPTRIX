import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from './usersActionsType';

export const fetchUser = payload => ({
  type: FETCH_USER,
  payload,
});
export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserError = payload => ({
  type: FETCH_USER_ERROR,
  payload,
});
