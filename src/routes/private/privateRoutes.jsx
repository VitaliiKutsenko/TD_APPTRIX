import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessToken, fetchAuth } from '../../store/auth/authActions';

export const Private = ({ children }) => {
  const token = localStorage.getItem('refresh');
  const dispatch = useDispatch();
  const auth = useSelector(store => store.checkAuth);

  useEffect(() => {
    dispatch(fetchAccessToken({ refresh: token }));
  }, []);

  if (!auth.success && auth.loading === 'isLoad') {
    return <Navigate to="/auth" />;
  }

  if (auth.success && auth.loading === 'isLoad') {
    return children;
  }
};
