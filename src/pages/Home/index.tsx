import * as React from 'react';
import type { NonIndexRouteObject } from 'react-router-dom';

import client from 'app/apollo/client';

import { VERIFY_TOKEN } from 'modules/auth/mutations';
import { getToken } from 'modules/auth';

import Home from './Home';

const definition: NonIndexRouteObject = {
  element: <Home />,
  loader: async () => {
    try {
      const token = getToken();

      if (token) {
        const {
          data: { verifyToken },
        } = await client.mutate({
          mutation: VERIFY_TOKEN,
          variables: { token },
        });

        return !!verifyToken.token;
      }

      return false;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('verifyToken error: ', err);
      return false;
    }
  },
};

export default definition;
