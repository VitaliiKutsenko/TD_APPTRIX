import {
  FETCH_AUTH,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_ERROR,
  LOADING,
  FETCH_ACCESS_TOKEN,
} from './authActionsType';

export const fetchAuth = payload => ({
  type: FETCH_AUTH,
  payload,
});
export const fetchAccessToken = payload => ({
  type: FETCH_ACCESS_TOKEN,
  payload,
});
export const fetchAuthSuccess = payload => ({
  type: FETCH_AUTH_SUCCESS,
  payload,
});

export const fetchAuthError = payload => ({
  type: FETCH_AUTH_ERROR,
  payload,
});

export const isLoading = payload => ({
  type: LOADING,
  payload,
});
