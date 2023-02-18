import React, { useCallback, useMemo } from 'react';

import { UsersListWrapper } from './usersListStyled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const UsersList = ({ children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { $type, ...list } = props;

  const renderList = () => {
    return Object.entries(list).map(list => {
      const [keys, values] = list;

      return (
        <li key={keys}>
          <h4>{keys.toUpperCase()}</h4>
          <p>{values}</p>
        </li>
      );
    });
  };

  const handleList = e => {
    const id = e.currentTarget.id;

    if (location.pathname === '/users') {
      navigate(`/users/${id}`, { state: props });
    }
  };

  return (
    <UsersListWrapper id={props.id} onClick={handleList}>
      {renderList()}
      {children}
    </UsersListWrapper>
  );
};
