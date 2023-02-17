import React, { useEffect } from 'react';
import { AuthWrapper } from './authStyled';
import { AuthForm } from './components/form/authForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../../store/auth/authActions';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  // const auth = useSelector(state => state.checkAuth);
  // const navigate = useNavigate();
  //
  // console.log(auth);
  //
  // useEffect(() => {
  //   if (auth.success) {
  //     // navigate('/');
  //   }
  // }, [auth.success]);

  const authDispatch = useDispatch();
  const submitHandler = data => {
    authDispatch(fetchAuth(data));
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={submitHandler} />
    </AuthWrapper>
  );
};
