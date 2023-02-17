import { FETCH_AUTH_ERROR, FETCH_AUTH_SUCCESS, LOADING } from './authActionsType';

const initialState = {
  success: null,
  error: null,
  loading: null,
};

export const checkAuth = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_AUTH_SUCCESS:
      const { access, refresh } = payload;

      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      return {
        ...state,
        success: true,
        error: false,
      };

    case FETCH_AUTH_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        ...payload,
      };

    case LOADING:
      return {
        ...state,
        loading: payload ? 'load' : 'isLoad',
      };

    default:
      return state;
  }
};
