import { combineReducers } from 'redux';
import { checkAuth } from './auth/authReducer';
import { logout } from './logout/logoutReducer';
import { userReducer } from './users/usersReducer';

export const appReducer = combineReducers({
  checkAuth,
  userReducer,
  logout,
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
