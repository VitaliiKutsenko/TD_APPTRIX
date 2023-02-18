import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/users/usersActions';
import { UsersWrapper } from './usersStyled';
import { UsersList } from './components/usersList';
import { Outlet } from 'react-router-dom';

export const Users = () => {
  const userDispatch = useDispatch();
  const user = useSelector(store => store.userReducer);

  useEffect(() => {
    userDispatch(fetchUser());
  }, []);

  const renderUsers = () => {
    if (user) {
      return user?.users?.map(user => {
        return <UsersList key={user.id} {...user} />;
      });
    }

    return null;
  };

  return <UsersWrapper>{renderUsers()}</UsersWrapper>;
};
