import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import apolloClient from '../app/apollo/client';

import './index.css';
import routeConfig from './routeConfig';

const router = createBrowserRouter(routeConfig);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <RouterProvider router={router} />
  </ApolloProvider>,
  document.getElementById('app'),
);
