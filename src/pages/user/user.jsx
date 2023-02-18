import React from 'react';

import { UserWrapper } from './userStyled';
import { useLocation } from 'react-router-dom';
import { UsersList } from '../users/components/usersList';

export const User = () => {
  const location = useLocation().state;

  return (
    <UserWrapper>
      <UsersList {...location}>
        <div className="type">
          <h4>Type:</h4>
          <p>{location['$type']}</p>
        </div>
      </UsersList>
    </UserWrapper>
  );
};
