import * as React from 'react';
import type { NonIndexRouteObject } from 'react-router-dom';

import ErrorBoundary from 'core/components/ErrorBoundary/ErrorBoundary';

import client from 'app/apollo/client';

import { GET_USER } from 'modules/auth';

import Base from './Base';

const definition: NonIndexRouteObject = {
  id: 'base',
  element: <Base />,
  errorElement: <ErrorBoundary />,
  loader: async () => {
    const response = await client.query({
      query: GET_USER,
    });

    if (!response.error) {
      const {
        data: { getUser: user },
      } = response;

      return user;
    }

    return null;
  },
};

export default definition;
