import { combineReducers } from 'redux';
import { checkAuth } from './auth/authReducer';
import { logout } from './logout/logoutReducer';

export const appReducer = combineReducers({
  checkAuth,
  logout,
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
