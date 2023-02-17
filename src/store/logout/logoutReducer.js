import { FETCH_AUTH_ERROR, FETCH_AUTH_SUCCESS, LOADING, LOGOUT } from './logoutActionsType';

const initialState = {};

export const logout = (state = initialState, { type }) => {
  switch (type) {
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');

      return { ...state };

    default:
      return state;
  }
};
