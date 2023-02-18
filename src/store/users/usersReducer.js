import { FETCH_USER_ERROR, FETCH_USER_SUCCESS } from './usersActionsType';

const initialState = {
  success: null,
  error: null,
  loading: null,
  users: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        users: payload,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        users: null,
      };

    default:
      return state;
  }
};
