import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Auth } from '../pages/auth/auth';
import { Main } from '../pages/main/main';
import { Private } from './private/privateRoutes';
import { Users } from '../pages/users/users';
import { User } from '../pages/user/user';

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Private>
            <Main />
          </Private>
        }
      />
      <Route
        path="users/*"
        element={
          <Private>
            <Users />
          </Private>
        }
      />
      <Route path="users/:id" element={<User />} />

      <Route path="auth" element={<Auth />} />
      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
