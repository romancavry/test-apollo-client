import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import apolloClient from 'app/apollo/client';

import { AuthProvider } from 'modules/auth/provider';

import { authorizedOnly, publicRoutes, unauthorizedOnly } from './routes';
import './index.css';

const router = createBrowserRouter([
  ...publicRoutes,
  ...unauthorizedOnly,
  ...authorizedOnly,
]);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
