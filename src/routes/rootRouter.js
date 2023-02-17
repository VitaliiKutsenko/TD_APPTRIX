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
import { PrivateRoutes } from './private/privateRoutes';

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PrivateRoutes>
            <Main />
          </PrivateRoutes>
        }
      />
      <Route path="auth" element={<Auth />} />
      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
